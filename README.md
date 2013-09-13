Quality-Watch
=============

Structure of repository:

    chart/<chart_identifier>.json
    chart/visualisation/<chart_identifier>[.N].js
    chart/download/<chart_identifier>.<extension>
    map/<map_identifier>.json
    map/visualisation/<map_identifier[.N].js
    map/download/<map_identifier>.<extension>

* Entity identifiers must be unique.
  * A suggestion might be an md5 hash of the chart/map title.
  http://www.miraclesalad.com/webtools/md5.php is a useful tool for this purpose.
  * Please avoid spaces or dot (.) separators in the filename.
* The website will pull changes from the master branch.

## Sample data

See the 'sample-data' branch for examples and further details.
