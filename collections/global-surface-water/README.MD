# Global Surface Water

## Short description

The Global Surface Water dataset was developed by the European Commission's Joint Research Centre (JRC) within the framework of the Copernicus Programme. It is derived from Landsat 5, 7 and 8 imagery and shows various aspects of the spatio-temporal distribution of surface water between 1984 and 2020 (with annual revisions) at the global scale in six different layers. Surface water is considered as any uncovered stretch of water (fresh and salt water areas) greater than 30m² visible from space, including natural and artificial water bodies.<br><br>

Please check the [FAQ](https://global-surface-water.appspot.com/faq) on the official [Global Surface Water website](https://global-surface-water.appspot.com/) for more details. Detailed information on the processing methodology for the included layers can be found in the [Data Users Guide](https://global-surface-water.appspot.com/download) and Pekel et al. (2016) [[1]](#References) as the associated scientific publication.

## Band information

The Global Surface Water dataset contains six layers that are listed in the table below:

#### Table 1: Layer Overview

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Data type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Occurrence</td>
      <td >unsigned int8</td>
      <td>The occurrence value expressed as a percentage</td>
    </tr>
     <tr>
      <td>Occurrence Change Intensity</td>
      <td >unsigned int8</td>
      <td>The normalised difference in the mean occurrence value between the two epochs for homologous months epoch1-epoch2 /epoch1+epoch2</td>
    </tr>
    <tr>
      <td>Seasonality</td>
      <td >unsigned int8</td>
      <td>The number of months that water was present from January to December in the year of review (2019 or 2020)</td>
    </tr>
    <tr>
      <td>Recurrence</td>
      <td >unsigned int8</td>
      <td>The frequency with which water returns from years to year expressed as a percentage</td>
    </tr>
    <tr>
      <td>Transitions</td>
      <td >unsigned int8</td>
      <td>The type of transition between the first and last year</td>
    </tr>
    <tr>
      <td>Extent</td>
      <td >unsigned int8</td>
      <td>A simple flag indicating if water was detected or not</td>
    </tr>
  </tbody>
</table>
<br>

### Occurrence

The water Occurrence layer shows the (intra- and inter-annual) variations of surface water presence in the time range between March 1984 and December 2020. Permanent water areas with 100% occurrence over the 37 years are shown in blue, while lighter shades of pink and purple indicate lower degrees of water presence, according to the official layer symbology (Table 2).<br><br>

<img src="image_occurrence_danube_delta.png" alt="Occurrence Danube Delta in Romania" width="100%"/>
<br>

*Occurrence layer visualisation in EO Browser for the Danube Delta in Romania.*

#### Table 2: Occurrence Symbology

<table style="width: 40%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#FFCCCC"></td>
      <td>0xffcccc</td>
      <td>1% occurrence</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color:#0000FF"></td>
      <td>0x0000ff</td>
      <td>100% occurrence</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Occurrence layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_occurrence/).

### Occurrence Change Intensity

The Occurrence Change Intensity layer visualises changes in water occurrence between two different epochs, the first ranging from **March 1984 to December 1999**, and the other covering the period from **January 2000 to December 2020**. According to the official layer symbology, the increase of water occurrence is visualised in different shades of green, no change is shown in black and decrease is shown in shades of red (Table 3).<br><br>

<img src="image_change_ganges_river.png" alt="Occurrence Change Intensity Ganges in Bangladesh" width="100%"/>
<br>

*Occurrence Change Intensity layer visualisation in EO Browser for a section of the Padma River, the main distributary of the Ganges, in Bangladesh.*

#### Table 3: Occurrence Change Intensity Symbology

<table style="width: 60%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FF0000"></td>
      <td>0xff0000</td>
      <td>-100% loss of occurrence</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color:#000000"></td>
      <td>0x000000</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>200</td>
      <td style="background-color:#00FF00"></td>
      <td>0x00ff00</td>
      <td>100% increase in occurrence</td>
    </tr>
    <tr>
      <td>253</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>254</td>
      <td style="background-color:#888888"></td>
      <td>0x888888</td>
      <td>Unable to calculate a value due to no homologous months</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Occurence Change Intensity layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_change/).

### Seasonality

The Seasonality layer provides information on the intra-annual distribution of surface water in the particular review year. According to the number of months with water cover, the discrete colour map shows areas with permanent water bodies in dark blue and seasonal surface water in gradually lighter shades of blue (Table 4).<br><br>

<img src="image_seasonality_salar_de_uyuni.png" alt="Seasonality Salar de Uyuni in Bolivia" width="100%"/>
<br>

*Eo Browser visualisation of surface water Seasonality in the world's largest salt flat Salar de Uyuni in southwest Bolivia.*

#### Table 4: Seasonality Symbology

<table style="width: 60%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#99D9EA"></td>
      <td>0x99d9ea</td>
      <td>1 month of water</td>
    </tr>
    <tr>
      <td>12</td>
      <td style="background-color:#0000AA"></td>
      <td>0x0000aa</td>
      <td>12 months of water (permanent water)</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Seasonality layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_seasonality/).

### Recurrence

The Recurrence layer captures the degree of interannual variability in surface water presence. It shows how frequently water returned to a particular location between years in a defined water period within the period from 1984 to 2020. The water period is defined individually for each pixel, ranging from the first month with an observation of surface water to the last month with surface water present throughout the 37-year time range. Areas with seasonal or permanent water presence are visualised in blue, while irregularly flooded areas are shown in orange (Table 5).<br><br>

<img src="image_recurrence_paddies_eluru.png" alt="Recurrence paddies near Eluru in India" width="100%"/>
<br>

*Recurrence layer visualisation in EO Browser showing Paddy fields near the city of Eluru in West Godavari, India.*

#### Table 5: Recurrence Symbology

<table style="width: 50%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#FF7F27"></td>
      <td>0xff7f27</td>
      <td>1% recurrence</td>
    </tr>
    <tr>
      <td>100</td>
      <td style="background-color:#99D9EA"></td>
      <td>0x99d9ea</td>
      <td>100% recurrence</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Recurrence layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_recurrence/).

### Transitions

The Transitions layer is derived from a seasonality comparison between the first and last year in the 37-year time period and visualises changes in the three surface water classes of not water, seasonal, and permanent water. A discrete colour map for the class transitions is provided in Table 6.<br><br>

<img src="image_transitions_parana_river.png" alt="Transitions Paraná River near Santa Fe in Argentina" width="100%"/>
<br>

*EO Browser visualisation of the Transitions layer showing the Paraná River near santa Fe, Argentina.*

#### Table 6: Transitions Symbology

<table style="width: 50%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#0000FF"></td>
      <td>0x0000ff</td>
      <td>Permanent</td>
    </tr>
    <tr>
      <td>2</td>
      <td style="background-color:#22B14C"></td>
      <td>0x22b14c</td>
      <td>New permanent</td>
    </tr>
    <tr>
      <td>3</td>
      <td style="background-color:#D1102D"></td>
      <td>0xd1102d</td>
      <td>Lost permanent</td>
    </tr>
    <tr>
      <td>4</td>
      <td style="background-color:#99D9EA"></td>
      <td>0x99d9ea</td>
      <td>Seasonal</td>
    </tr>
    <tr>
      <td>5</td>
      <td style="background-color:#B5E61D"></td>
      <td>0xb5e61d</td>
      <td>New seasonal</td>
    </tr>
    <tr>
      <td>6</td>
      <td style="background-color:#E6A1AA"></td>
      <td>0xe6a1aa</td>
      <td>Lost seasonal</td>
    </tr>
    <tr>
      <td>7</td>
      <td style="background-color:#FF7F27"></td>
      <td>0xff7f27</td>
      <td>Seasonal to permanent</td>
    </tr>
    <tr>
      <td>8</td>
      <td style="background-color:#FFC90E"></td>
      <td>0xffc90e</td>
      <td>Permanent to seasonal</td>
    </tr>
    <tr>
      <td>9</td>
      <td style="background-color:#7F7F7F"></td>
      <td>0x7f7f7f</td>
      <td>Ephemeral permanent</td>
    </tr>
    <tr>
      <td>10</td>
      <td style="background-color:#C3C3C3"></td>
      <td>0xc3c3c3</td>
      <td>Ephemeral seasonal</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Transitions layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_transitions/).

### Extent

The maximum water Extent layer combines all other layers by visualising all locations for which water presence has ever been detected over the 37-year period.<br><br>

<img src="image_extent_lake_kyoga.png" alt="Extent of Lake Kyoga in Uganda" width="100%"/>
<br>

*Extent layer visualisation in EO Browser capturing the maximum water extent for Lake Kyoga, Uganda.*

#### Table 7: Extent Symbology

<table style="width: 40%">
  <colgroup>
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 2%;">
       <col span="1" style="width: 5%;">
       <col span="1" style="width: 70%;">
  </colgroup>
  <thead>
    <tr>
      <th>Value</th>
      <th>Symbol</th>
      <th>Colour</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td style="background-color:#FFFFFF"></td>
      <td>0xffffff</td>
      <td>Not water</td>
    </tr>
    <tr>
      <td>1</td>
      <td style="background-color:#6666FF"></td>
      <td>0x6666ff</td>
      <td>Water detected</td>
    </tr>
    <tr>
      <td>255</td>
      <td style="background-color:#CCCCCC"></td>
      <td>0xcccccc</td>
      <td>No data</td>
    </tr>
  </tbody>
</table>
<br>

A visualisation script for the Extent layer can be found in our [custom scripts repository](https://custom-scripts.sentinel-hub.com/copernicus_services/global_surface_water_extent/).

## More information

- [Global Surface Water website](https://global-surface-water.appspot.com/)
- [Data Users Guide](https://global-surface-water.appspot.com/download)

### References

[1]: *Pekel, J. F., Cottam, A., Gorelick, N., & Belward, A. S. (2016). High-resolution mapping of global surface water and its long-term changes. Nature, 540(7633), 418-422.*
