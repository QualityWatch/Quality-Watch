Quality-Watch
=============

Structure of repository:

    chart/<chart_identifier>.json
    chart/visualisation/<chart_identifier>[.N].js
    chart/download/<chart_identifier>.<extension>
    indicator/<indicator_identifier>.json
    map/<map_identifier>.json
    map/visualisation/<map_identifier[.N].js
    map/download/<map_identifier>.<extension>

* Entity identifiers must be unique.
* The website will pull changes from the master branch.
* If maps will support downloads, these will be in the format outlined above.

## Sample data

See the 'sample-data' branch for examples and further details.
