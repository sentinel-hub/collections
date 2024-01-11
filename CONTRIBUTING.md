**The goal of this registry is to expand access to useful data available on Sentinel Hub.** With that in mind, we prefer to list datasets that are clearly documented, are actively supported, can be used for research or educational purposes. Collections are included at the discretion of the Sentinel Hub team, which may remove collections from the registry at any time. Data providers are responsible for maintaining and supporting the data that they share. 

## How are collections added to the registry?

Each collection in this repository is described in a dedicated YAML file stored in [./collections](https://github.com/sentinel-hub/public-collections/tree/main/collections) directory, e.g. /collections/global-land-cover.yaml.  
Data providers can create a new YAML file copying the structure of the most similar existing one. After committing it to the GitHub, create a pull request and Sentinel Hub team will review it and publish it in the Registry.  
Note that for additional external files e.g the thumbnail image to be displayed correctly , store it in a directory that is named similar to the associated YAML file. 
Users are also welcome to revise existing collections, e.g. adding new usage examples , tools, etc.  

## Collection metadata explanation
<details>
   <summary>basic metadata</summary>

| Field | Type | Description & Style |
| --- | --- | --- |
| **Name** | String | Full name of the collection.|
| **Description**|MD|A high-level description of the collection. Only the first 600 characters will be displayed on the homepage of the [Sentinel Hub Public Collections](https://collections.sentinel-hub.com/).|
 **Documentation**|MD| A link to documentation of the collection on the data provider's website.|
|**AdditionalInfoExternal**|| Additional documentation of the collection contained in a README.MD file saved in this repository.|
|**AdditionalInfoExternal >> Title**|String| Title,  default = 'Additional Info' |
|**AdditionalInfoExternal >> Path**|Path | Path to README.MD with additional documentation of the collection.|
|**Image**| Path | Path to thumbnail image representing the collection that is to be displayed on the homepage. Automatically sized to 200 pixels width for display. |
|**ViewOnEOBrowser**|String | Link to the collection displayed in EO Browser. |
|**Resolution**|MD| Spatial resolution of raster collection.|
|**GeographicalCoverage**|MD| A short description on geographical coverage of the collection, it could be land, ocean or lat-lon extents.|
|**TemporalAvailability**|MD| The time period of availability of the collection (general recommended format: `'YYYY-MM-DD - YYYY-MM-DD'` or `YYYY-MM-DD - ongoing` if continously updated) |
|**TemporalResolution**|MD | The time period of data acquisition for the exact same location.|
|**UpdateFrequency**|MD| An explanation of how frequently the collection is updated.|
|**BandInformation**|MD| Description of available bands and data. It could be a link to the description or a table with the description. |
|**Contact**|MD|Contact details. |
|**Provider**|MD|The name of the organization that provides the collection. |
|**ManagedBy**|String|The name of the organization that manages the collection.|
|**Tags**|List of strings|Tags that topically describe the collection. Tags should include the following elements where applicable `open data` or `commercial data`, `derived data`, `core collection` if one of the core sH collections, data source e.g `CLMS`, thematic domain e.g `phenology`, common use e.g `agriculture`.|
|**License**|MD|An explanation of the collection license and/or a link to more information.|
|**Resources**|List of lists|A list of resources to access the collections. Each resource entry requires collection specific metadata as below.|
|**Resources > Endpoint**|String|Endpoint where the Sentinel Hub collection can be accessed e.g (`services.sentinel-hub.com`).|
|**Resources > Type**|String|Sentinel Hub collection name.|
|**Resources > CollectionId**|String|Sentinel Hub BYOC collection ID.|
|**Resources > Notes**|MD|More info regarding the collection.|
|**CustomScripts**| | Collections' custom scripts. |
|**CustomScripts > Title**| String | Collections' custom script title.|
|**CustomScripts > URL** | String | Link to the collections' custom script. |
|**DataAtWork [> Tutorials, Tools & Applications, Publications]** |List of lists| (Optional) A list of links to example tutorials, tools & applications or publications that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > Title**|String|The title of the tutorials, tools & applications or publications that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > URL**|String|A link to the tutorial, tool & applications or publication that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorName**|String|Name(s) of person or entity that created the tutorial, tool, application, or publication. Limit scientific publication author lists to the first six authors in the format Last Name First Initial, followed by 'et al.'|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorURL**|String|(Optional) URL for person or entity that created the tutorial, tool, application or publication.|
|**RegistryEntryAdded**|String|Date of the collection added to the registry.|
|**RegistryEntryLastModified**|String|Date of the last collection modification.|

</details>


## How to build Sentinel Hub Public Collections website locally
You can build the Sentinel Hub Public Collections website locally, to preview and test your changes before submitting a merge request. Below is a step-by-step guide to build the site locally.


<details> 
   <summary>Linux & Mac</summary>
   <h4>Prerequisites</h4>
   <p><code>Node</code> and <code>npm</code> must be installed before you can build a site.</p>
   <li>Open Terminal.</li>
   <li>Run <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash</code>.</li>
   <li>Run <code>nvm install node</code>.</li>
   <li>Run <code>npm install</code>.</li>
   <li>Reboot Terminal.</li>
   <li>Create a .env file with the following content in the repository.

   ```
   GIT_HUB_COLLECTIONS_REPO=sentinel-hub/public-collections
   GIT_HUB_COLLECTIONS_BRANCH=main
   COLLECTIONS_BROWSER_ROOT_URL="http://localhost:3000/"
   ```

   </li>
   <h4>Building your site locally</h4>
   <li>Open Terminal.</li>
   <li>Run <code>export $(xargs <.env)</code>.</li>
   <li>Run <code>npm run serve</code>.</li>
   <li>This will open http://localhost:3000/ where the website can be inspected</li>

</details> 

<details> 
   <summary>Windows</summary>
   <h4>Prerequisites</h4>
   <p><code>Node</code> and <code>npm</code> must be installed before you can build a site.</p>
   <li>Install Ubuntu on <a href="https://ubuntu.com/wsl">Windows Subsystem for Linux (WSL)</a></li>
   <li>Open WSL Terminal.</li>
   <li>Run <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash</code>.</li>
   <li>Reboot WSL Terminal.</li>
   <li>Run <code>nvm install node</code>.</li>
   <li>Run <code>npm init</code> to create a `package.json` file.</li>
   <li>Run <code>npm install</code>.</li>
   <li>Reboot WSL Terminal.</li>
   <li>Create a .env file with the following content in the repository.

   ```
   GIT_HUB_COLLECTIONS_REPO=sentinel-hub/public-collections
   GIT_HUB_COLLECTIONS_BRANCH=main
   COLLECTIONS_BROWSER_ROOT_URL="http://localhost:3000/"
   ```

   </li>
   <h4>Building your site locally</h4>
   <li>Open WSL Terminal.</li>
   <li>Run <code>export $(xargs <.env)</code>.</li>
   <li>Run <code>npm run serve</code>.</li>
   <li>This will open http://localhost:3000/ where the website can be inspected</li>

</details> 


## How to make use of these collection

Check this [FAQ entry](https://www.sentinel-hub.com/faq/#how-to-visualize-own-collection-eobrowser) to see how to configure your Sentinel Hub configuration and/or visualise them in EO Browser.

