# Sentinel 1 River and Lake Ice Extent

## Short description
The Sentinel 1 River and Lake Ice Extent S1 (RLIE S1) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Snow and Ice Monitoring [(HR-S&I)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring) Ice product suite.The River and Lake Ice Extent (RLIE) products measure the presence of ice in rivers and lakes described by the EU-HYDRO network database, in particular the area of snow-free or snow-covered ice. 
The RLIE S1 product is released in near real time for the entire EEA39 zone based on the revisit time of the Sentinel 1 syntetic aperture radar constellation (~ 6 days at the equator and ~1 to 3 days in European countries), and it is generated at a spatial resolution of 20 m x 20 m.  Because it is time critical for several applications, every effort is made to provide near real time ice products between 6 and 12 hours after the data sensing time. 
More information about the RLIE S1 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum)

## Band information
The RLIE S1 contains three layers: (1) the extent of rivers and lakes, (2) quality layer with confidence levels (QC), and (3) quality flags (QCFLAGS).

### River and Lake Ice Extent symbology (RLIE)

<table style="width: 40%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 50%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td style="background-color:#0000FE"></td>
      <td>Open water</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color:#00E8FF"></td>
      <td>Snow-covered or snow-free ice</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#FFFFFF"></td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

### Confidence levels symbology (QC)

<table style="width: 40%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 50%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#5DA400"></td>
      <td>High quality</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#BDBD5B"></td>
      <td>Medium quality</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color:#FFC000"></td>
      <td>Low quality</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color:#FF0000"></td>
      <td>Minimal quality</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#FFFFFF"></td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

###  Quality flags (QCFLAGS)

<table style="width: 40%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 50%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bit 1</td>
      <td>Dimension flag</td>
    </tr>
    <tr>
      <td>bit 2</td>
      <td>Standing water flag</td>
    </tr>
    <tr>
      <td>bit 3</td>
      <td>Radar shadow flag</td>
    </tr>
    <tr>
      <td>bit 4</td>
      <td>Temporary water flag</td>
    </tr>
    <tr>
      <td>bit 5</td>
      <td>Imperviousness flag</td>
    </tr>
    <tr>
      <td>bit 6</td>
      <td>Tree cover density flag</td>
    </tr>
    <tr>
      <td>bit 7</td>
      <td>Grassland flag</td>
    </tr>
  </tbody>
</table>
<br>

## More information
### Representative Images 

<img src="extent-nordland-norway.PNG" alt="Sentinel 1 River and Lake Ice Extent" width="100%"/>

*Sentinel 1 River and Lake Ice Extent, 2023, Nordland, Norway.*

<br>
<br>
<img src="qlayer-nordland-norway.PNG" alt="Confidence levels of the Sentinel 1 River and Lake Ice Extent layer" width="100%"/>
<br>

*Confidence levels of the Sentinel 1 River and Lake Ice Extent, 2023, Nordland, Norway.*


