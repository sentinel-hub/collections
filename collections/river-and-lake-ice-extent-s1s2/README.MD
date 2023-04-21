# River and Lake Ice Extent S1+S2

## Short description

The River and Lake Ice Extent S1+S2 (RLIE S1+S2) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Snow and Ice Monitoring [(HR-S&I)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring) Ice product suite.The River and Lake Ice Extent (RLIE) products measure the presence of ice in rivers and lakes described by the EU-HYDRO network database, in particular the area of snow-free or snow-covered ice. 
The RLIE S1+S2 product is computed from the combination of RLIE S1 and RLIE S2 products.The RLIE S2 product from a given day is gap-filled using the RLIE S1 information from the same day. Because the RLIE S1+S2 is only produced when RLIE S2 and RLIE S1 products are aquired on the same day, it is delivered in delayed-time for the entire EEA39 zone at a spatial resolution of 20 m x 20 m.
More information about the RLIE S1+S2 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum)

## Band information

The RLIE S1+S2 contains three layers: (1) the extent of rivers and lakes, (2) quality layer with confidence levels (QC), and (3) quality flags (QCFLAGS).

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
      <td>205</td>
      <td style="background-color:#FF0000"></td>
      <td>Cloud or cloud shadow</td>
    </tr>
    <tr>
      <td>254</td>
      <td style="background-color:#7B7B7B"></td>
      <td>Other features</td>
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

### Quality flags (QCFLAGS)

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
      <td> dimension (bit 8 active) or topographic shadow (bit 8 inactive)</td>
    </tr>
    <tr>
      <td>bit 2</td>
      <td>standing water (bit 8 active) or unseen pixels due to topography (bit 8 inactive)</td>
    </tr>
    <tr>
      <td>bit 3</td>
      <td>radar shadow (bit 8 active) or sun elevation angle too low for an accurate topographic correction (from MAJA), (bit 8 inactive)</td>
    </tr>
    <tr>
      <td>bit 4</td>
      <td>water & wetness (bit 8 active) or solar elevation angle tangent to slope (from MAJA), (bit 8 inactive)</td>
    </tr>
    <tr>
      <td>bit 5</td>
      <td>Imperviousness ≥75%</td>
    </tr>
    <tr>
      <td>bit 6</td>
      <td>Tree cover density</td>
    </tr>
    <tr>
      <td>bit 7</td>
      <td>Grassland</td>
    </tr>
    <tr>
      <td>bit 8</td>
      <td>S1-provided information (active) or S2-provided information (inactive)</td>
    </tr>    
  </tbody>
</table>
<br>

## More information

### Representative Images

<img src="extent-rovaniemi-findland.PNG" alt="River and Lake Ice Extent S1+S2" width="100%"/>

*River and Lake Ice Extent S1+S2, 2021, Rovaniemi, Findland.*

<br>
<br>
<img src="qlayer-rovaniemi-findland.PNG" alt="Confidence levels of the River and Lake Ice Extent layer S1+S2" width="100%"/>
<br>

*Confidence levels of the River and Lake Ice Extent S1+S2, 2021, Rovaniemi, Findland.*
