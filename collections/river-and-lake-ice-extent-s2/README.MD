# Sentinel 2 River and Lake Ice Extent

## Short description
The Sentinel 2 River and Lake Ice Extent (RLIE S2) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Snow and Ice Monitoring [(HR-S&I)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring) Ice product suite.The River and Lake Ice Extent (RLIE) products measure the presence of ice in rivers and lakes described by the EU-HYDRO network database, in particular the area of snow-free or snow-covered ice. 
The RLIE S2 product is released in near real time for the entire EEA39 zone based on the revisit time of the Sentinel 2 constellation (approximately every 5 days or less), and it is generated at a spatial resolution of 20 m x 20 m.  Because it is time critical for several applications, every effort is made to provide near real time ice products between 6 and 12 hours after the data sensing time. 
More information about the RLIE S2 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum)

## Band information
The RLIE S2 contains two layers: (1) the extent of rivers and lakes, (2) quality layer with confidence levels (QC), and (3) quality flags (QCFLAGS).

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
      <td>254</td>
      <td style="background-color:#FF0000"></td>
      <td>Other features</td>
    </tr>
    <tr>
      <td>205</td>
      <td style="background-color:#7B7B7B"></td>
      <td>Cloud or cloud shadows</td>
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
      <td>205</td>
      <td style="background-color:#7B7B7B"></td>
      <td>Cloud or cloud shadow</td>
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
      <td>Topographical shadows</td>
    </tr>
    <tr>
      <td>bit 2</td>
      <td>Unseen pixels due to topography</td>
    </tr>
    <tr>
      <td>bit 3</td>
      <td>Sun elevation angle too low for an accurate topographic correction (from MAJA)</td>
    </tr>
    <tr>
      <td>bit 4</td>
      <td>Solar elevation angle tangent to slope (from MAJA)</td>
    </tr>
    <tr>
      <td>bit 5</td>
      <td>Imperviousness ≥75%</td>
    </tr>
    <tr>
      <td>bit 6</td>
      <td>Tree cover density ≥75%</td>
    </tr>
    <tr>
      <td>bit 7</td>
      <td>Grassland =1</td>
    </tr>
  </tbody>
</table>
<br>

## More information
### Representative Images 

<img src="extent-varese-como-lecco-italy.PNG" alt="Sentinel 2 River and Lake Ice Extent" width="100%"/>

*Sentinel 2 River and Lake Ice Extent, 2022, Varese-Como-Lecco, Italy.*

<br>
<br>
<img src="qlayer-varese-como-lecco-italy.PNG" alt="Confidence levels of the Sentinel 2 River and Lake Ice Extent layer" width="100%"/>
<br>

*Confidence levels of the Sentinel 2 River and Lake Ice Extent, 2022, Varese-Como-Lecco, Italy.*


