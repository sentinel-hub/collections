# Sentinel-2 L2A 120m Mosaic

## Short description

Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As there are some parts of the world, which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).

## Sentinel Hub end-points
| end-point  |  collectionID |
|---|---|
|services.sentinel-hub.com|0074520d-bcf5–4811–8f6f-afd946e77695|
|creodias.sentinel-hub.com|eaa027cc-1d9b-40fc-a15c-9dc486caebd7|


## Resolution

120 m

## Geographical coverage

Land surface area between 58 degrees South and 72 degrees North.

## Temporal availability

2019 (2020 coming in April 2021, past years later on)

## Update frequency

Annually

## Band information

```
B02 (blue)
B03 (green)
B04 (blue)
B08 (NIR)
B11 (SWIR)
B12 (SWIR)  
```
The values are corresponding to digital numbers (DN), [typically going from 0-10000](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l2a/#units).  
See more details about each band [here](https://docs.sentinel-hub.com/api/latest/data/sentinel-2-l2a/#available-bands-and-data).

## Provider

[Sinergise](https://www.sinergise.com/)

## More information

Link for more information: [Announcement blog post](https://medium.com/p/20f3b5de846e)

![Yearly time-lapse of the world](timelapse.gif)

*Yearly time-lapse of the world, using 2019 Sentinel-2 L2A data.*

![Screenshot of the same data in the EO Browser](image.png)

*Screenshot of the same data in EO Browser*

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
<br />
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
