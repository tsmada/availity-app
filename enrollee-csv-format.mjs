import fs from 'fs';
import csvParser from 'csv-parser';
import fastcsv from 'fast-csv';
import _ from 'lodash';

/* Requirements
*  1. Deduplicate the list of records by userid (highest version)
*  2. Create function to sort input by last name, first asc
*  3. Write pivoted records to individual files
*/

/* Intuition
On the surface seems pretty straight forward. We have some file system
operations to occur which are going to have some impacts depending on
data types and data transformations. For the sake of time I'm including a few packages
to speed up this exercise. I suspect there are user land packages that provide the streamable
transformation operations we need to perform. However, we have no computational complexity constraints.
So let's read all the data into memory and operate on it from there. There are some edge cases
for CSVs like byte order markings, headers included, delimiter type, file type and
so on. Perform the sorts/groupings once the file is done being read and then write
the output files using an async stream.
*/

let results = [];
const fileNames = [];

fs.createReadStream('enrollees.csv')
  .on('error', (err) => {
    throw err;
  })
  .pipe(csvParser())
  .on('data', (data) => {
    if (data && data !== undefined && data.User_Id) results.push(data);
  })
  .on('end', () => {
    results = _.map(
      _.groupBy(results, 'User_Id'),
      (g) => _.maxBy(g, 'Version'),
    );
    results = nameSort(results);
    writeOutputFiles(results, fileNames);
  });


const writeOutputFiles = (data, fileNames) => {
  if (!data || data === undefined || fileNames.length === 0) {
    return;
  }

  fileNames.forEach((file) => {
    const fileData = data.filter((item) => item.Insurance_Company === file);
    const ws = fs.createWriteStream(`${file}.csv`);
    fastcsv
      .write(fileData)
      .pipe(ws);
  });
};

const nameSort = (names) => {
  if (!names || names === undefined) {
    return;
  }

  names.sort((a, b) => {
    if (a.First_Last.split(' ').length !== 2 || b.First_Last.split(' ').length !== 2) {
      return;
    }

    if (!fileNames.includes(a.Insurance_Company)) {
      fileNames.push(a.Insurance_Company);
    }
    const nameA = a.First_Last.split(' ')[1];
    const nameB = b.First_Last.split(' ')[1];
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return names;
};
