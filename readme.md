# Zip
### *Package Name*: zip
### *Child Type*: Shell
### *Platform*: All
### *Required*: All

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose
This shell module is part of the pre-import process. It zips up the altered course files so they can be sent to Canvas.

## How to Install
```
npm install zip
```

## Run Requirements
This child module requires the following fields in the course.info object:
* `processedPath`
* `uploadZipPath`

## Options
None

## Outputs
| Option | Type | Location |
|--------|--------|-------------|
| Zip file | .zip | Your hard drive |

## Process
1. Zip the files

## Log Categories
This module does not use course.log anywhere.

## Requirements
Allow us to repackage D2L course export files after altering them so the course can be uploaded to canvas