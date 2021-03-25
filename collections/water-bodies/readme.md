# Water Bodies 

## Short description
The Global Water Bodies product shows the surface extent covered by inland water on permanent, seasonal or occasional basis. The  product available here is the  [Water Bodies  100m Version 1](https://land.copernicus.eu/global/products/wb) collection which is derived from Sentinel-2 level 1C data, starting from October 2020 after the end of the PROBA-V mission and is delivered as a monthly composite product at 100m resolution.   

The Water Bodies product contain one main Water Bodies detection layer (WB) and one Quality layer (QUAL) that provides information on the seasonal dynamics of the detected water bodies. Water Bodies detection layer (WB) shows water bodies  detected using the Modified Normalized Difference Water Index [(MNDWI)](https://en.wikipedia.org/wiki/Normalized_difference_water_index) derived from Sentinel-2 Level 1C data. The Quality layer (QUAL) is generated from water body occurrence statistics computed from previous monthly Water Bodies products.The occurrence statistics is ranked from low occurrence to permanent occurrence.

More information about the data can be obtained from the [Water Bodies product](https://land.copernicus.eu/global/products/wb) page.

## Sentinel Hub end-points
| end-point  |  collectionID |
|---|---|
|creodias.sentinel-hub.com|`62bf6f6a-c584-48a8-a739-0bc60efee54a`|

## Resolution

100 m

## Geographical coverage

Global coverage from longitude -180°E to +180°W and latitude +80°N to -60S  
**NOTE:** Depending on the month, some high latitude areas are not covered by Sentinel-2 satellites and thus implies a No Data value in the product.

## Update frequency

Monthly

## Temporal availability
October 2020 to present

 
## Band information
Water Bodies product contain 2 bands (WB and QUAL) and are described in Table 1 below.  
[Water Bodies visualisation script](https://custom-scripts.sentinel-hub.com/copernicus_services/water-bodies/) and [Water Bodies occurrence visualisation script](https://custom-scripts.sentinel-hub.com/copernicus_services/water-bodies-occurence/) can be found in Sentinel Hub custom scripts repository.


**Table 1: Bands** 
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Units</th>
      <th>Values</th>
	    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WB </td>
      <td>DN </td>
      <td>70</td>
	    <td> Main Water Bodies detection layer showing water pixels and non-water pixels  
      <ul>
          <li> 0 = Sea </li>
          <li> 70 = Water </li>
          <li> 251 = No data</li>
          <li> 255 = No water </li>
     </ul>
  </td>
    </tr>
    <tr>
      <td> QUAL</td>
      <td> DN </td>
      <td>71 - 76 </td>
	    <td> Quality layer which gives information on water bodies occurrence
      <ul>
          <li>0 = Sea</li>
          <li>71 = Very low occurence</li>
          <li>72 = Low occurence</li>
          <li>73 = Medium occurence</li>
          <li>74 = High occurence</li>
          <li>75 = Very high occurence</li>
          <li>76 = Permanent occurence</li>
          <li>251 = No data</li>
          <li>252 = Cloud</li>
          <li>255 = Not water</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>  


## Provider

[European Commission Joint Research Centre (JRC)](https://land.copernicus.eu/global/about)

## More information
- [Data Source](https://land.copernicus.vgt.vito.be/PDF/portal/Application.html#Browse;Root=514888;Collection=1000152;Time=NORMAL,NORMAL,-1,,,-1,,)
- [Product User Manual](https://land.copernicus.eu/global/sites/cgls.vito.be/files/products/CGLOPS2_PUM_WB100m_V1_I1.00.pdf)


![Water bodies map Baikal lake ](fig/baikal-water.PNG)

*October 2020 monthly composite map showing surface water body extent around Russia's largest freshwater lake Baikal visualised in EO browser*

![Water occurrence map lake Bakhtegan and Tashk, Iran](fig/Bakhtegan-occurrence.PNG)

*December 2020 water body occurrence on Iran's second largest salt lake Bakhtegan and lake Tashk visualised in EO browser*

## License

Free and open access policy as defined in the European Union’s Copernicus regulation (https://land.copernicus.eu/global/about)
