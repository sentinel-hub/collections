# High-Resolution Snow & Ice Monitoring; SAR Wet Snow in high mountains - Wet Snow classification in high Mountains areas

## Short description

The SAR Wet Snow (SWS) product provides information on the wet snow extent in high-mountain areas. 

## Band information

Table 1: Bands available in HR&SI SWS data collection.

<table>
  <thead>
    <tr>
      <th>Band Name</th>
      <th>Sample Type</th>
      <th>Expected Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WSM </td>
      <td >UINT 8</td>
      <td>Refer to Table 2 </td>
      <td>Wet Snow classification in high Mountains areas </td>
    </tr>
    <tr>
      <td>QCWSM </td>
      <td >UINT8 </td>
      <td>0 - high quality, 1 - medium quality, 2 - low quality, 3 - minimal quality, 250 - masked, 255 - no data  </td>
      <td>WSM quality layer </td>
    </tr>         
   </tbody>
</table> 

Table 2: Classification classes and colouring scheme for WSM band.

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
      <td style="background-color: #ff4dff;"></td>
      <td>110 - Wet snow</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color: #ffffff;"></td>
      <td>125 - Dry snow or snow free or patchy snow</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color: #000000;"></td>
      <td>200 - Radar shadow / layover / foreshortening</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color: #4d4dff;"></td>
      <td>210 - Water</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color: #00a600;"></td>
      <td>220 - Forest</td>
    </tr>
    <tr>
      <td>6</td>
      <td style="background-color: #f2a64d;"></td>
      <td>230 - Urban area</td>
    </tr>
      <tr>
      <td>7</td>
      <td style="background-color: #ccffcc;"></td>
      <td>240 - Non-mountain areas</td>
    </tr>
      <tr>
      <td>8</td>
      <td style="background-color: #ff0000;"></td>
      <td>255 - No data</td>
    </tr>
</tbody>
</table>

## More information  

More information about the HR-S&I snow production workflows that highlights the dependencies between the diferent products and how they are derived can be found [here](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products).

### Representative Images 

<img src="figure.png" alt="SWS WSM, 1st April 2021, Bormio, IT" width="100%"/>

*SAR Wet Snow in high mountains - Wet Snow classification in high Mountains areas, 1st April 2021, Bormio, IT.*