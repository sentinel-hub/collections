# High-Resolution Snow & Ice Monitoring; Wet / Dry Snow - Snow state classification

## Short description

The Wet/Dry Snow (WDS) product differentiates the snow state conditions within the snow mask defined by the FSCTOC information.

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
      <td>SSC </td>
      <td >UINT 8</td>
      <td>Refer to Table 2 </td>
      <td>Snow State Classification  </td>
    </tr>
    <tr>
      <td>QCSSC </td>
      <td >UINT8 </td>
      <td>0 - high quality, 1 - medium quality, 2 - low quality, 3 - minimal quality, 250 - masked, 255 - no data  </td>
      <td>SSC quality layer </td>
    </tr>         
   </tbody>
</table> 

Table 2: Classification classes and colouring scheme for SSC band.

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
      <td>115 - Dry snow</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color: #e6e64d;"></td>
      <td>120 - Snow free or patchy snow</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color: #000000;"></td>
      <td>200 - Radar shadow / layover / foreshortening</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color: #cccccc;"></td>
      <td>205 - Cloud or cloud shadow</td>
    </tr>
    <tr>
      <td>6</td>
      <td style="background-color: #4d4dff;"></td>
      <td>210 - Water</td>
    </tr>
    <tr>
      <td>7</td>
      <td style="background-color: #00a600;"></td>
      <td>220 - Forest</td>
    </tr>
    <tr>
      <td>8</td>
      <td style="background-color: #f2a64d;"></td>
      <td>230 - Urban area</td>
    </tr>
    <tr>
      <td>9</td>
      <td style="background-color: #ff0000;"></td>
      <td>255 - No data</td>
    </tr>
</tbody>
</table>  

## More information  

More information about the HR-S&I snow production workflows that highlights the dependencies between the diferent products and how they are derived can be found [here](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products).

### Representative Images 

<img src="figure.png" alt="WDS SSC, 1st April 2021, Bormio, IT" width="100%"/>

*Wet / Dry Snow - Snow state classification, 1st April 2021, Bormio, IT.*