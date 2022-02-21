# CNES Land Cover Map

## Short description
The CNES Land Cover Map (Occupation des Sols, OSO) produces land classification for Metropolitan France at 10 m spatial resolution based on Sentinel-2 L2A data within the Theia Land Cover CES framework. Maps for 2020, 2019, and 2018 use a 23-categories nomenclature. For earlier maps in 2017 and 2016, a fully compatible 17-classes nomenclature is employed.

## Band information
The CNES Land Cover product contains 3 bands. The `OCS` band contains main classification data with class values ranging from 1 to 23. The Land Cover nomenclature and colouring scheme is shown below.

The other 2 bands are `OCS_Confidence` and `OCS_Validity`. The `OCS_Confidence` band provides the information on the classifier confidence with values ranging from 1 to 100. The `OCS_Validity` band indicates the number of cloudless images.

### CNES Land Cover nomenclature and colouring scheme.

<table>
  <thead>
    <tr>
      <th>Value</th>
      <th>Color</th>
      <th>Color Code</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td bgcolor="#ff00ff"></td>
      <td>#ff00ff</td>
      <td>Dense built-up area</td>
    </tr>
    <tr>
      <td>2</td>
      <td bgcolor="#ff55ff"></td>
      <td>#ff55ff</td>
      <td>Diffuse built-up area</td>
    </tr>
    <tr>
      <td>3</td>
      <td bgcolor="#ffaaff"></td>
      <td>#ffaaff</td>
      <td>Industrial and commercial areas</td>
    </tr>
    <tr>
      <td>4</td>
      <td bgcolor="#00ffff"></td>
      <td>#00ffff</td>
      <td>Roads</td>
    </tr>
    <tr>
      <td>5</td>
      <td bgcolor="#ffff00"></td>
      <td>#ffff00</td>
      <td>Oilseeds (Rapeseed)</td>
    </tr>
    <tr>
      <td>6</td>
      <td bgcolor="#d0ff00"></td>
      <td>#d0ff00</td>
      <td>Straw cereals (Wheat, Triticale, Barley)</td>
    </tr>
    <tr>
      <td>7</td>
      <td bgcolor="#a1d600"></td>
      <td>#a1d600</td>
      <td>Protein crops (Beans / Peas)</td>
    </tr>
    <tr>
      <td>8</td>
      <td bgcolor="#ffab44"></td>
      <td>#ffab44</td>
      <td>Soy</td>
    </tr>
    <tr>
      <td>9</td>
      <td bgcolor="#d6d600"></td>
      <td>#d6d600</td>
      <td>Sunflower</td>
    </tr>
    <tr>
      <td>10</td>
      <td bgcolor="#ff5500"></td>
      <td>#ff5500</td>
      <td>Corn</td>
    </tr>
    <tr>
      <td>11</td>
      <td bgcolor="#c5ffff"></td>
      <td>#c5ffff</td>
      <td>Rice</td>
    </tr>
    <tr>
      <td>12</td>
      <td bgcolor="#aaaa61"></td>
      <td>#aaaa61</td>
      <td>Tubers/roots</td>
    </tr>
    <tr>
      <td>13</td>
      <td bgcolor="#aaaa00"></td>
      <td>#aaaa00</td>
      <td>Grasslands</td>
    </tr>
    <tr>
      <td>14</td>
      <td bgcolor="#aaaaff"></td>
      <td>#aaaaff</td>
      <td>Orchards and fruit growing</td>
    </tr>
    <tr>
      <td>15</td>
      <td bgcolor="#550000"></td>
      <td>#550000</td>
      <td>Vineyards</td>
    </tr>
    <tr>
      <td>16</td>
      <td bgcolor="#009c00"></td>
      <td>#009c00</td>
      <td>Hardwood forest</td>
    </tr>
    <tr>
      <td>17</td>
      <td bgcolor="#003200"></td>
      <td>#003200</td>
      <td>Softwood forest</td>
    </tr>
    <tr>
      <td>18</td>
      <td bgcolor="#aaff00"></td>
      <td>#aaff00</td>
      <td>Natural grasslands and pastures</td>
    </tr>
    <tr>
      <td>19</td>
      <td bgcolor="#55aa7f"></td>
      <td>#55aa7f</td>
      <td>Woody moorlands</td>
    </tr>
    <tr>
      <td>20</td>
      <td bgcolor="#ff0000"></td>
      <td>#ff0000</td>
      <td>Natural mineral surfaces</td>
    </tr>
    <tr>
      <td>21</td>
      <td bgcolor="#ffb802"></td>
      <td>#ffb802</td>
      <td>Beaches and dunes</td>
    </tr>
    <tr>
      <td>22</td>
      <td bgcolor="#bebebe"></td>
      <td>#bebebe</td>
      <td>Glaciers and eternal snows</td>
    </tr>
    <tr>
      <td>23</td>
      <td bgcolor="#0000ff"></td>
      <td>#0000ff</td>
      <td>Water</td>
    </tr>
  </tbody>
</table>

## More information
All data originated from Theia and can be downloaded via their [website](https://www.theia-land.fr/en/product/land-cover-map/).

### Representative Images

<img src="cnes-land-cover-map.png" alt="The overview of CNES Land Cover Map" width="100%"/>

*CNES Land Cover 2020 for France visualised in EO Browser.*

<br>
<img src="lyon.png" alt="CNES Land cover Map around Lyon" width="100%"/>

*CNES Land Cover 2020 around Lyon visualised in EO Browser*


