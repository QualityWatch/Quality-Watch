Quality-Watch
=============

Structure of repository:

    chart/<import_id>.json
    chart/visualisation/<import_id>[.N].js
    chart/download/<import_id>.<extension>
    map/<import_id>.json
    map/visualisation/<import_id>[.N].js

* File import ids must be unique.
  * A suggestion might be an md5 hash of the chart/map title.
  http://www.miraclesalad.com/webtools/md5.php is a useful tool for this purpose.
  * Please avoid spaces or dot (.) separators in the filename, as it may interfere
    with how visualisations files are processed.
* Ensure that JSON files validate by checking on http://jsonlint.com
  * Escape characters such as double quotes or forward slashes with a preceding backslash.
* The website will pull changes from the master branch.
* If maps will support downloads, these will be in the format outlined above.

## Sample data

See the 'sample-data' branch for examples and further details.
