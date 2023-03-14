# High-Resolution Snow & Ice Monitoring; Fractional Snow Cover

## Short description

The Fractional Snow Cover (FSC) product provides the snow fraction at the Top Of Canopy (FSCTOC) and On Ground (FSCOG). NDSI is also provided as part of this service.

## Band information

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
      <td>FSCTOC </td>
      <td >UINT 8</td>
      <td>0-100%, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>Top of canopy fractional snow cover (%) </td>
    </tr>
    <tr>
      <td>FSCOG </td>
      <td >UINT8 </td>
      <td>0-100%, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>On-ground fractional snow cover (%) </td>
    </tr>
    <tr>
      <td>QCTOC </td>
      <td >UINT8 </td>
      <td>0 - high quality, 1 - medium quality, 2 - low quality, 3 - minimal quality, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>FSCTOC quality layer </td>
    </tr>
    <tr>
      <td>QCOG </td>
      <td >UINT8 </td>
      <td>0 - high quality, 1 - medium quality, 2 - low quality, 3 - minimal quality, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>FSCOG quality layer</td>
    </tr>
    <tr>
      <td>NDSI </td>
      <td >UINT8 </td>
      <td>0-100%, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>Normalised difference snow index (%) </td>
    </tr>            
   </tbody>
</table> 

## More information  

More information about the HR-S&I snow production workflows that highlights the dependencies between the diferent products and how they are derived can be found [here](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products).

### Representative Images 

<img src="figure.png" alt="FSC On Ground, 23rd April 2020, Innsbruck, AT" width="100%"/>

*On-ground fractional snow cover(%)  On Ground, 23rd April 2020, Innsbruck, AT.*