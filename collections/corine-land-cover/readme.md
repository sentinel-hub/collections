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

<table>
<thead>
  <tr>
    <th></th>
    <th> <br>CLC1990 </th>
    <th> <br>CLC2000 </th>
    <th> <br>CLC2006 </th>
    <th> <br>CLC2012 </th>
    <th> <br>CLC2018 </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td> <br><span style="font-weight:bold">Satellite data</span> </td>
    <td> <br>Landsat-5 MSS/TM<br> <br>single date </td>
    <td> <br>Landsat-7 ETM<br> <br>single date </td>
    <td> <br>SPOT-4/5 and<br> <br>IRS P6 LISS III<br> <br>dual date </td>
    <td > <br>IRS P6 LISS III<br> <br>and RapidEye<br> <br>dual date </td>
    <td > <br>Sentinel-2 and Landsat-8 for gap filling </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Time consistency</span></td>
    <td > <br>1986-1998 </td>
    <td > <br>2000 +/- 1 year </td>
    <td > <br>2006+/- 1 year </td>
    <td > <br>2011-2012 </td>
    <td > <br>2017-2018 </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Geometric accuracy, satellite data</span> </td>
    <td > <br>≤ 50 m </td>
    <td > <br>≤ 25 m </td>
    <td > <br>≤ 25 m </td>
    <td > <br>≤ 25 m </td>
    <td > <br>≤ 10 m (Sentinel-2) </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Min. mapping unit/width</span></td>
    <td > <br>25 ha / 100m </td>
    <td > <br>25 ha / 100m </td>
    <td > <br>25 ha / 100m </td>
    <td > <br>25 ha / 100m </td>
    <td > <br>25 ha / 100 m </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Geometric accuracy, CLC</span> </td>
    <td > <br>100 m </td>
    <td > <br>better than 100 m </td>
    <td > <br>better than 100 m </td>
    <td > <br>better than 100 m </td>
    <td > <br>better than 100 m </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Geometric accuracy, CLC</span>Thematic accuracy, CLC </td>
    <td > <br>≥ 85% (probably not achieved) </td>
    <td > <br>≥ 85%<br> <br>(achieved) [13] </td>
    <td > <br>≥ 85% </td>
    <td > <br>≥ 85%<br> <br>(probably achieved) </td>
    <td > <br>≥ 85%<br> <br>  </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Change mapping (CHA)</span> </td>
    <td > <br>not implemented </td>
    <td > <br>boundary displacement min. 100 m;<br> <br>change area for existing polygons ≥ 5 ha; for isolated changes ≥ 25 ha </td>
    <td > <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
    <td > <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
    <td > <br>boundary displacement min.100 m;<br> <br>all changes ≥ 5 ha are to be mapped </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Thematic accuracy, CHA </span></td>
    <td > <br>- </td>
    <td > <br>not checked </td>
    <td > <br>≥ 85%<br> <br>(achieved) </td>
    <td > <br>≥ 85% </td>
    <td > <br>≥ 85% </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Production time</span> </td>
    <td > <br>10 years </td>
    <td > <br>4 years </td>
    <td > <br>3 years </td>
    <td > <br>2 years </td>
    <td > <br>1.5 years </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Documentation</span> </td>
    <td > <br>incomplete metadata </td>
    <td > <br>standard metadata </td>
    <td > <br>standard metadata </td>
    <td > <br>standard metadata </td>
    <td > <br>standard metadata </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Access to the data (CLC, CHA)</span> </td>
    <td > <br>unclear dissemination policy </td>
    <td > <br>dissemination policy agreed from the start </td>
    <td > <br>free access for all users </td>
    <td > <br>free access for all users </td>
    <td > <br>free access for all users </td>
  </tr>
  <tr>
    <td> <br><span style="font-weight:bold">Number of countries involved</span> </td>
    <td > <br>26<br> <br>(27 with late implementation) </td>
    <td > <br>30<br> <br>(35 with late implementation) </td>
    <td > <br>38 </td>
    <td > <br>39 </td>
    <td > <br>39 </td>
  </tr>
</tbody>
</table>

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

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td style="background-color: #e6004d;"></td>
      <td>111 - Continuous urban fabric</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color: #ff0000;"></td>
      <td>112 - Discontinuous urban fabric</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color: #cc4df2;"></td>
      <td>121 - Industrial or commercial units</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color: #cc0000;"></td>
      <td>122 - Road and rail networks and associated land</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color: #e6cccc;"></td>
      <td>123 - Port areas</td>
    </tr>
    <tr>
      <td>6</td>
      <td style="background-color: #e6cce6;"></td>
      <td>124 - Airports</td>
    </tr>
    <tr>
      <td>7</td>
      <td style="background-color: #a600cc;"></td>
      <td>131 - Mineral extraction sites</td>
    </tr>
    <tr>
      <td>8</td>
      <td style="background-color: #a64d00;"></td>
      <td>132 - Dump sites</td>
    </tr>
    <tr>
      <td>9</td>
      <td style="background-color: #ff4dff;"></td>
      <td>133 - Construction sites</td>
    </tr>
    <tr>
      <td>10</td>
      <td style="background-color: #ffa6ff;"></td>
      <td>141 - Green urban areas</td>
    </tr>
    <tr>
      <td>11</td>
      <td style="background-color: #ffe6ff;"></td>
      <td>142 - Sport and leisure facilities</td>
    </tr>
    <tr>
      <td>12</td>
      <td style="background-color: #ffffa8;"></td>
      <td>211 - Non-irrigated arable land</td>
    </tr>
    <tr>
      <td>13</td>
      <td style="background-color: #ffff00;"></td>
      <td>212 - Permanently irrigated land</td>
    </tr>
    <tr>
      <td>14</td>
      <td style="background-color: #e6e600;"></td>
      <td>213 - Rice fields</td>
    </tr>
    <tr>
      <td>15</td>
      <td style="background-color: #e68000;"></td>
      <td>221 - Vineyards</td>
    </tr>
    <tr>
      <td>16</td>
      <td style="background-color: #f2a64d;"></td>
      <td>222 - Fruit trees and berry plantations</td>
    </tr>
    <tr>
      <td>17</td>
      <td style="background-color: #e6a600;"></td>
      <td>223 - Olive groves</td>
    </tr>
    <tr>
      <td>18</td>
      <td style="background-color: #e6e64d;"></td>
      <td>231 - Pastures</td>
    </tr>
    <tr>
      <td>19</td>
      <td style="background-color: #ffe6a6;"></td>
      <td>241 - Annual crops associated with permanent crops</td>
    </tr>
    <tr>
      <td>20</td>
      <td style="background-color: #ffe64d;"></td>
      <td>242 - Complex cultivation patterns</td>
    </tr>
    <tr>
      <td>21</td>
      <td style="background-color: #e6cc4d;"></td>
      <td>243 - Land principally occupied by agriculture with significant areas of natural vegetation</td>
    </tr>
    <tr>
      <td>22</td>
      <td style="background-color: #f2cca6;"></td>
      <td>244 - Agro-forestry areas</td>
    </tr>
    <tr>
      <td>23</td>
      <td style="background-color: #80ff00;"></td>
      <td>311 - Broad-leaved forest</td>
    </tr>
    <tr>
      <td>24</td>
      <td style="background-color: #00a600;"></td>
      <td>312 - Coniferous forest</td>
    </tr>
    <tr>
      <td>25</td>
      <td style="background-color: #4dff00;"></td>
      <td>313 - Mixed forest</td>
    </tr>
    <tr>
      <td>26</td>
      <td style="background-color: #ccf24d;"></td>
      <td>321 - Natural grasslands</td>
    </tr>
    <tr>
      <td>27</td>
      <td style="background-color: #a6ff80;"></td>
      <td>322 - Moors and heathland</td>
    </tr>
    <tr>
      <td>28</td>
      <td style="background-color: #a6e64d;"></td>
      <td>323 - Sclerophyllous vegetation</td>
    </tr>
    <tr>
      <td>29</td>
      <td style="background-color: #a6f200;"></td>
      <td>324 - Transitional woodland-shrub</td>
    </tr>
    <tr>
      <td>30</td>
      <td style="background-color: #e6e6e6;"></td>
      <td>331 - Beaches - dunes - sands</td>
    </tr>
    <tr>
      <td>31</td>
      <td style="background-color: #cccccc;"></td>
      <td>332 - Bare rocks</td>
    </tr>
    <tr>
      <td>32</td>
      <td style="background-color: #ccffcc;"></td>
      <td>333 - Sparsely vegetated areas</td>
    </tr>
    <tr>
      <td>33</td>
      <td style="background-color: #000000;"></td>
      <td>334 - Burnt areas</td>
    </tr>
    <tr>
      <td>34</td>
      <td style="background-color: #a6e6cc;"></td>
      <td>335 - Glaciers and perpetual snow</td>
    </tr>
    <tr>
      <td>35</td>
      <td style="background-color: #a6a6ff;"></td>
      <td>411 - Inland marshes</td>
    </tr>
    <tr>
      <td>36</td>
      <td style="background-color: #4d4dff;"></td>
      <td>412 - Peat bogs</td>
    </tr>
    <tr>
      <td>37</td>
      <td style="background-color: #ccccff;"></td>
      <td>421 - Salt marshes</td>
    </tr>
    <tr>
      <td>38</td>
      <td style="background-color: #e6e6ff;"></td>
      <td>422 - Salines</td>
    </tr>
    <tr>
      <td>39</td>
      <td style="background-color: #a6a6e6;"></td>
      <td>423 - Intertidal flats</td>
    </tr>
    <tr>
      <td>40</td>
      <td style="background-color: #00ccf2;"></td>
      <td>511 - Water courses</td>
    </tr>
    <tr>
      <td>41</td>
      <td style="background-color: #80f2e6;"></td>
      <td>512 - Water bodies</td>
    </tr>
    <tr>
      <td>42</td>
      <td style="background-color: #00ffa6;"></td>
      <td>521 - Coastal lagoons</td>
    </tr>
    <tr>
      <td>43</td>
      <td style="background-color: #a6ffe6;"></td>
      <td>522 - Estuaries</td>
    </tr>
    <tr>
      <td>44</td>
      <td style="background-color: #e6f2ff;"></td>
      <td>523 - Sea and ocean</td>
    </tr>
    <tr>
      <td>48</td>
      <td style="background-color: #ffffff;"></td>
      <td>999 - NODATA</td>
    </tr>
  </tbody>
</table>

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

Full, open and free access, Copernicus license (https://land.copernicus.eu/terms-of-use).