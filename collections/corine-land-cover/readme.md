# CORINE Land Cover

## Short description

In 1985 the 'Coordination of Information on the Environment' (CORINE) programme was initiated by the European Commission. It aimed at collecting environmental information on high priority topics for the European Union (air, water, soil, land cover, coastal erosion, biotopes, etc.). Since 1994, the established databases and programmes are managed by the [European Environment Agency (EEA)](https://www.eea.europa.eu/).

The [CORINE Land Cover (CLC) inventory](https://land.copernicus.eu/pan-european/corine-land-cover) is a vector-based dataset that consists of 44 land cover and land use classes (Table 2) derived from a series of satellite missions since it was first established (Table 1).

## Sentinel Hub end-points

| end-point | collectionID |
|---|---|
|creodias.sentinel-hub.com|`cbdba844-f86d-41dc-95ad-b3f7f12535e9`|

## Resolution

100 m

Table 1: The evolution of CORINE Land Cover ([source](https://land.copernicus.eu/pan-european/corine-land-cover)).

</br>
<style type="text/css">
.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-797t{background-color:#f9f9f9;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-dzk6{background-color:#f9f9f9;text-align:center;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax"></th>
    <th class="tg-amwm"> <br>CLC1990 </th>
    <th class="tg-amwm"> <br>CLC2000 </th>
    <th class="tg-amwm"> <br>CLC2006 </th>
    <th class="tg-amwm"> <br>CLC2012 </th>
    <th class="tg-amwm"> <br>CLC2018 </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-797t"> <br>Satellite data </td>
    <td class="tg-dzk6"> <br>Landsat-5 MSS/TM<br> <br>single date </td>
    <td class="tg-dzk6"> <br>Landsat-7 ETM<br> <br>single date </td>
    <td class="tg-dzk6"> <br>SPOT-4/5 and<br> <br>IRS P6 LISS III<br> <br>dual date </td>
    <td class="tg-dzk6"> <br>IRS P6 LISS III<br> <br>and RapidEye<br> <br>dual date </td>
    <td class="tg-dzk6"> <br>Sentinel-2 and Landsat-8 for gap filling </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Time consistency </td>
    <td class="tg-baqh"> <br>1986-1998 </td>
    <td class="tg-baqh"> <br>2000 +/- 1 year </td>
    <td class="tg-baqh"> <br>2006+/- 1 year </td>
    <td class="tg-baqh"> <br>2011-2012 </td>
    <td class="tg-baqh"> <br>2017-2018 </td>
  </tr>
  <tr>
    <td class="tg-797t"> <br>Geometric accuracy, satellite data </td>
    <td class="tg-dzk6"> <br>≤ 50 m </td>
    <td class="tg-dzk6"> <br>≤ 25 m </td>
    <td class="tg-dzk6"> <br>≤ 25 m </td>
    <td class="tg-dzk6"> <br>≤ 25 m </td>
    <td class="tg-dzk6"> <br>≤ 10 m (Sentinel-2) </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Min. mapping unit/width </td>
    <td class="tg-baqh"> <br>25 ha / 100m </td>
    <td class="tg-baqh"> <br>25 ha / 100m </td>
    <td class="tg-baqh"> <br>25 ha / 100m </td>
    <td class="tg-baqh"> <br>25 ha / 100m </td>
    <td class="tg-baqh"> <br>25 ha / 100 m </td>
  </tr>
  <tr>
    <td class="tg-797t"> <br>Geometric accuracy, CLC </td>
    <td class="tg-dzk6"> <br>100 m </td>
    <td class="tg-dzk6"> <br>better than 100 m </td>
    <td class="tg-dzk6"> <br>better than 100 m </td>
    <td class="tg-dzk6"> <br>better than 100 m </td>
    <td class="tg-dzk6"> <br>better than 100 m </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Thematic accuracy, CLC </td>
    <td class="tg-baqh"> <br>≥ 85% (probably not achieved) </td>
    <td class="tg-baqh"> <br>≥ 85%<br> <br>(achieved) [13] </td>
    <td class="tg-baqh"> <br>≥ 85% </td>
    <td class="tg-baqh"> <br>≥ 85%<br> <br>(probably achieved) </td>
    <td class="tg-baqh"> <br>≥ 85%<br> <br>  </td>
  </tr>
  <tr>
    <td class="tg-797t"> <br>Change mapping (CHA) </td>
    <td class="tg-dzk6"> <br>not implemented </td>
    <td class="tg-dzk6"> <br>boundary displacement min. 100 m;<br> <br>change area for existing polygons ≥ 5 ha; for isolated changes ≥ 25 ha </td>
    <td class="tg-dzk6"> <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
    <td class="tg-dzk6"> <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
    <td class="tg-dzk6"> <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Thematic accuracy, CHA </td>
    <td class="tg-baqh"> <br>- </td>
    <td class="tg-baqh"> <br>not checked </td>
    <td class="tg-baqh"> <br>≥ 85%<br> <br>(achieved) </td>
    <td class="tg-baqh"> <br>≥ 85% </td>
    <td class="tg-baqh"> <br>≥ 85% </td>
  </tr>
  <tr>
    <td class="tg-797t"> <br>Production time </td>
    <td class="tg-dzk6"> <br>10 years </td>
    <td class="tg-dzk6"> <br>4 years </td>
    <td class="tg-dzk6"> <br>3 years </td>
    <td class="tg-dzk6"> <br>2 years </td>
    <td class="tg-dzk6"> <br>1.5 years </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Documentation </td>
    <td class="tg-baqh"> <br>incomplete metadata </td>
    <td class="tg-baqh"> <br>standard metadata </td>
    <td class="tg-baqh"> <br>standard metadata </td>
    <td class="tg-baqh"> <br>standard metadata </td>
    <td class="tg-baqh"> <br>standard metadata </td>
  </tr>
  <tr>
    <td class="tg-797t"> <br>Access to the data (CLC, CHA) </td>
    <td class="tg-dzk6"> <br>unclear dissemination policy </td>
    <td class="tg-dzk6"> <br>dissemination policy agreed from the start </td>
    <td class="tg-dzk6"> <br>free access for all users </td>
    <td class="tg-dzk6"> <br>free access for all users </td>
    <td class="tg-dzk6"> <br>free access for all users </td>
  </tr>
  <tr>
    <td class="tg-1wig"> <br>Number of countries involved </td>
    <td class="tg-baqh"> <br>26<br> <br>(27 with late implementation) </td>
    <td class="tg-baqh"> <br>30<br> <br>(35 with late implementation) </td>
    <td class="tg-baqh"> <br>38 </td>
    <td class="tg-baqh"> <br>39 </td>
    <td class="tg-baqh"> <br>39 </td>
  </tr>
</tbody>
</table>
</br>

## Geographical coverage

- Pan-European
- French overseas regions and departments (DOMs)

## Temporal availability

The following datasets are available:

- CLC 2018
- CLC 2012
- CLC 2006
- CLC 2000
- CLC 1990

## Update frequency

Every 6 years

## Band information

The band values correspond to a land cover and land use classification scheme with class values ranging from 0 to 44. Please see the nomenclature and coloring scheme in the table below. For more details about the classes, please see the official [CORINE Land Cover nomenclature guidelines](https://land.copernicus.eu/user-corner/technical-library/corine-land-cover-nomenclature-guidelines/html/index.html) or the illustrated [nomenclature guidelines document](https://land.copernicus.eu/user-corner/technical-library/corine-land-cover-nomenclature-guidelines/docs/pdf/CLC2018_Nomenclature_illustrated_guide_20190510.pdf).

A visualisation script can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/corine_land_cover/).

Table 2: CORINE Land Cover nomenclature and colouring scheme.

</br>
<style type="text/css">
    .tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
    .tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
      font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
      font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-yvt2{background-color:#ccffcc;text-align:center;vertical-align:top}
    .tg .tg-sz9i{background-color:#a6ff80;text-align:center;vertical-align:top}
    .tg .tg-jptu{background-color:#e6cccc;text-align:center;vertical-align:top}
    .tg .tg-i17e{background-color:#00ccf2;text-align:center;vertical-align:top}
    .tg .tg-bzqc{background-color:#e6e600;text-align:center;vertical-align:top}
    .tg .tg-kkh9{background-color:#ffe6a6;text-align:center;vertical-align:top}
    .tg .tg-u8lh{background-color:#f2cca6;text-align:center;vertical-align:top}
    .tg .tg-u0ju{background-color:#e68000;text-align:center;vertical-align:top}
    .tg .tg-qup0{background-color:#e6e6ff;text-align:center;vertical-align:top}
    .tg .tg-p6u6{background-color:#a600cc;text-align:center;vertical-align:top}
    .tg .tg-0hd6{background-color:#ccf24d;text-align:center;vertical-align:top}
    .tg .tg-5ycx{background-color:#ffa6ff;text-align:center;vertical-align:top}
    .tg .tg-buh4{background-color:#f9f9f9;text-align:left;vertical-align:top}
    .tg .tg-fqis{background-color:#e6cce6;text-align:center;vertical-align:top}
    .tg .tg-cpq8{background-color:#a6e6cc;text-align:center;vertical-align:top}
    .tg .tg-dw4t{background-color:#a6ffe6;text-align:center;vertical-align:top}
    .tg .tg-v16d{background-color:#f9f9f9;border-color:#cccccc;text-align:left;vertical-align:top}
    .tg .tg-65iu{border-color:#cccccc;text-align:left;vertical-align:top}
    .tg .tg-yfbn{background-color:#e6e6e6;text-align:center;vertical-align:top}
    .tg .tg-thk7{background-color:#f9f9f9;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-3y57{background-color:#80ff00;text-align:center;vertical-align:top}
    .tg .tg-xrua{background-color:#e6cc4d;text-align:center;vertical-align:top}
    .tg .tg-w08x{background-color:#a64d00;text-align:center;vertical-align:top}
    .tg .tg-tw9y{background-color:#cc0000;text-align:center;vertical-align:top}
    .tg .tg-bzyr{background-color:#ffff00;text-align:center;vertical-align:top}
    .tg .tg-0fmr{background-color:#ff4dff;text-align:center;vertical-align:top}
    .tg .tg-lwbn{background-color:#4dff00;text-align:center;vertical-align:top}
    .tg .tg-quxf{background-color:#ffffff;text-align:center;vertical-align:top}
    .tg .tg-uhwp{background-color:#a6a6ff;text-align:center;vertical-align:top}
    .tg .tg-z9l6{background-color:#cc4df2;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-58ep{background-color:#efefef;border-color:#cccccc;font-weight:bold;text-align:center;vertical-align:top}
    .tg .tg-hm7l{background-color:#e6004d;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-o57c{border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-igv9{background-color:#ff0000;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    .tg .tg-48se{background-color:#ffe6ff;text-align:center;vertical-align:top}
    .tg .tg-ehqp{background-color:#ffffa8;text-align:center;vertical-align:top}
    .tg .tg-g4qz{background-color:#f2a64d;text-align:center;vertical-align:top}
    .tg .tg-3r4j{background-color:#e6a600;text-align:center;vertical-align:top}
    .tg .tg-smbw{background-color:#e6e64d;text-align:center;vertical-align:top}
    .tg .tg-sqt7{background-color:#ffe64d;text-align:center;vertical-align:top}
    .tg .tg-ma8f{background-color:#00a600;text-align:center;vertical-align:top}
    .tg .tg-da8g{background-color:#a6e64d;text-align:center;vertical-align:top}
    .tg .tg-kzwu{background-color:#a6f200;text-align:center;vertical-align:top}
    .tg .tg-5tql{background-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-p19p{background-color:#000000;text-align:center;vertical-align:top}
    .tg .tg-yqze{background-color:#4d4dff;text-align:center;vertical-align:top}
    .tg .tg-ccod{background-color:#ccccff;text-align:center;vertical-align:top}
    .tg .tg-1zfs{background-color:#a6a6e6;text-align:center;vertical-align:top}
    .tg .tg-q4oy{background-color:#80f2e6;text-align:center;vertical-align:top}
    .tg .tg-6sen{background-color:#00ffa6;text-align:center;vertical-align:top}
    .tg .tg-uk0n{background-color:#e6f2ff;text-align:center;vertical-align:top}
    </style>
    <table class="tg">
    <thead>
      <tr>
        <th class="tg-58ep">Value</th>
        <th class="tg-58ep">Color</th>
        <th class="tg-58ep">Label</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-thk7">1</td>
        <td class="tg-hm7l"></td>
        <td class="tg-v16d">111 - Continuous urban fabric</td>
      </tr>
      <tr>
        <td class="tg-o57c">2</td>
        <td class="tg-igv9"></td>
        <td class="tg-65iu">112 - Discontinuous urban fabric</td>
      </tr>
      <tr>
        <td class="tg-thk7">3</td>
        <td class="tg-z9l6"></td>
        <td class="tg-v16d">121 - Industrial or commercial units</td>
      </tr>
      <tr>
        <td class="tg-o57c">4</td>
        <td class="tg-tw9y"></td>
        <td class="tg-0lax">122 - Road and rail networks and associated land</td>
      </tr>
      <tr>
        <td class="tg-thk7">5</td>
        <td class="tg-jptu"></td>
        <td class="tg-buh4">123 - Port areas</td>
      </tr>
      <tr>
        <td class="tg-o57c">6</td>
        <td class="tg-fqis"></td>
        <td class="tg-0lax">124 - Airports</td>
      </tr>
      <tr>
        <td class="tg-thk7">7</td>
        <td class="tg-p6u6"></td>
        <td class="tg-buh4">131 - Mineral extraction sites</td>
      </tr>
      <tr>
        <td class="tg-o57c">8</td>
        <td class="tg-w08x"></td>
        <td class="tg-0lax">132 - Dump sites</td>
      </tr>
      <tr>
        <td class="tg-thk7">9</td>
        <td class="tg-0fmr"></td>
        <td class="tg-buh4">133 - Construction sites</td>
      </tr>
      <tr>
        <td class="tg-o57c">10</td>
        <td class="tg-5ycx"></td>
        <td class="tg-0lax">141 - Green urban areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">11</td>
        <td class="tg-48se"></td>
        <td class="tg-buh4">142 - Sport and leisure facilities</td>
      </tr>
      <tr>
        <td class="tg-o57c">12</td>
        <td class="tg-ehqp"></td>
        <td class="tg-0lax">211 - Non-irrigated arable land</td>
      </tr>
      <tr>
        <td class="tg-thk7">13</td>
        <td class="tg-bzyr"></td>
        <td class="tg-buh4">212 - Permanently irrigated land</td>
      </tr>
      <tr>
        <td class="tg-o57c">14</td>
        <td class="tg-bzqc"></td>
        <td class="tg-0lax">213 - Rice fields</td>
      </tr>
      <tr>
        <td class="tg-thk7">15</td>
        <td class="tg-u0ju"></td>
        <td class="tg-buh4">221 - Vineyards</td>
      </tr>
      <tr>
        <td class="tg-o57c">16</td>
        <td class="tg-g4qz"></td>
        <td class="tg-0lax">222 - Fruit trees and berry plantations</td>
      </tr>
      <tr>
        <td class="tg-thk7">17</td>
        <td class="tg-3r4j"></td>
        <td class="tg-buh4">223 - Olive groves</td>
      </tr>
      <tr>
        <td class="tg-o57c">18</td>
        <td class="tg-smbw"></td>
        <td class="tg-0lax">231 - Pastures</td>
      </tr>
      <tr>
        <td class="tg-thk7">19</td>
        <td class="tg-kkh9"></td>
        <td class="tg-buh4">241 - Annual crops associated with permanent crops</td>
      </tr>
      <tr>
        <td class="tg-o57c">20</td>
        <td class="tg-sqt7"></td>
        <td class="tg-0lax">242 - Complex cultivation patterns</td>
      </tr>
      <tr>
        <td class="tg-thk7">21</td>
        <td class="tg-xrua"></td>
        <td class="tg-buh4">243 - Land principally occupied by agriculture with significant areas of natural vegetation</td>
      </tr>
      <tr>
        <td class="tg-o57c">22</td>
        <td class="tg-u8lh"></td>
        <td class="tg-0lax">244 - Agro-forestry areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">23</td>
        <td class="tg-3y57"></td>
        <td class="tg-buh4">311 - Broad-leaved forest</td>
      </tr>
      <tr>
        <td class="tg-o57c">24</td>
        <td class="tg-ma8f"></td>
        <td class="tg-0lax">312 - Coniferous forest</td>
      </tr>
      <tr>
        <td class="tg-thk7">25</td>
        <td class="tg-lwbn"></td>
        <td class="tg-buh4">313 - Mixed forest</td>
      </tr>
      <tr>
        <td class="tg-o57c">26</td>
        <td class="tg-0hd6"></td>
        <td class="tg-0lax">321 - Natural grasslands</td>
      </tr>
      <tr>
        <td class="tg-thk7">27</td>
        <td class="tg-sz9i"></td>
        <td class="tg-buh4">322 - Moors and heathland</td>
      </tr>
      <tr>
        <td class="tg-o57c">28</td>
        <td class="tg-da8g"></td>
        <td class="tg-0lax">323 - Sclerophyllous vegetation</td>
      </tr>
      <tr>
        <td class="tg-thk7">29</td>
        <td class="tg-kzwu"></td>
        <td class="tg-buh4">324 - Transitional woodland-shrub</td>
      </tr>
      <tr>
        <td class="tg-o57c">30</td>
        <td class="tg-yfbn"></td>
        <td class="tg-0lax">331 - Beaches - dunes - sands</td>
      </tr>
      <tr>
        <td class="tg-thk7">31</td>
        <td class="tg-5tql"></td>
        <td class="tg-buh4">332 - Bare rocks</td>
      </tr>
      <tr>
        <td class="tg-o57c">32</td>
        <td class="tg-yvt2"></td>
        <td class="tg-0lax">333 - Sparsely vegetated areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">33</td>
        <td class="tg-p19p"></td>
        <td class="tg-buh4">334 - Burnt areas</td>
      </tr>
      <tr>
        <td class="tg-o57c">34</td>
        <td class="tg-cpq8"></td>
        <td class="tg-0lax">335 - Glaciers and perpetual snow</td>
      </tr>
      <tr>
        <td class="tg-thk7">35</td>
        <td class="tg-uhwp"></td>
        <td class="tg-buh4">411 - Inland marshes</td>
      </tr>
      <tr>
        <td class="tg-o57c">36</td>
        <td class="tg-yqze"></td>
        <td class="tg-0lax">412 - Peat bogs</td>
      </tr>
      <tr>
        <td class="tg-thk7">37</td>
        <td class="tg-ccod"></td>
        <td class="tg-buh4">421 - Salt marshes</td>
      </tr>
      <tr>
        <td class="tg-o57c">38</td>
        <td class="tg-qup0"></td>
        <td class="tg-0lax">422 - Salines</td>
      </tr>
      <tr>
        <td class="tg-thk7">39</td>
        <td class="tg-1zfs"></td>
        <td class="tg-buh4">423 - Intertidal flats</td>
      </tr>
      <tr>
        <td class="tg-o57c">40</td>
        <td class="tg-i17e"></td>
        <td class="tg-0lax">511 - Water courses</td>
      </tr>
      <tr>
        <td class="tg-thk7">41</td>
        <td class="tg-q4oy"></td>
        <td class="tg-buh4">512 - Water bodies</td>
      </tr>
      <tr>
        <td class="tg-o57c">42</td>
        <td class="tg-6sen"></td>
        <td class="tg-0lax">521 - Coastal lagoons</td>
      </tr>
      <tr>
        <td class="tg-thk7">43</td>
        <td class="tg-dw4t"></td>
        <td class="tg-buh4">522 - Estuaries</td>
      </tr>
      <tr>
        <td class="tg-o57c">44</td>
        <td class="tg-uk0n"></td>
        <td class="tg-0lax">523 - Sea and ocean</td>
      </tr>
      <tr>
        <td class="tg-thk7">48</td>
        <td class="tg-quxf"></td>
        <td class="tg-buh4">999 - NODATA</td>
      </tr>
    </tbody>
    </table>
</br>

## Provider

[European Environment Agency](https://www.eea.europa.eu/)

## More information

- [Data source](https://land.copernicus.eu/pan-european/corine-land-cover)
- [Visualisation script in custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/corine_land_cover/)

![CORINE Land Cover dataset over the Alps](image_alps.png)

*CORINE Land Cover dataset over the Alps in EO Browser.*

![CORINE Land Cover dataset over Guadeloupe and Martinique](image_fdoms.png)

*CORINE Land Cover dataset over Guadeloupe and Martinique, two French DOMs, in EO Browser.*

## License

The Copernicus programme is governed by Regulation (EU) No 377/2014 of the European Parliament and of the Council of 3 April 2014 establishing the Copernicus programme and repealing Regulation (EU) No 911/2010. Within the Copernicus programme, a portfolio of land monitoring activities has been delegated by the European Union to the EEA. The land monitoring products and services are made available through the Copernicus land portal on a principle of full, open and free access, as established by the Copernicus data and information policy Regulation (EU) No 1159/2013 of 12 July 2013.
