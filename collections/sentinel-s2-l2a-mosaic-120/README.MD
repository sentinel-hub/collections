# Sentinel-2 L2A 120m Mosaic

## Short description

Sentinel-2 L2A 120m mosaic is a derived product, which contains best pixel values for 10-daily periods, modelled by removing the cloudy pixels and then performing interpolation among remaining values. As clouds can be missed and as there are some parts of the world which have lengthy cloudy periods, clouds might be remaining in some parts. The actual modelling script is available [here](https://sentinel-hub.github.io/custom-scripts/sentinel-2/interpolated_time_series/).

## Band information
Sentinel-2 L2A 120m mosaic contains 12 Sentinel 2 L2A bands and 1 quality mask. Find more information about sentinel 2 L2A bands [here](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-l2a/#available-bands-and-data).

### Quality Mask

#### Value details
- 0: no data; areas where no valid observations have been found
- 1: interpolation passed; areas where the interpolation process successfully finished
- 2: artificially raised value; some/all bands' DN values here were raised from 0 to 1 so that these areas are not confused with `NO_DATA` areas
- 3: interpolation failed; usually this happens if it's detected that clouds are always present - the values is set to max of bands' values, which is 10000

#### Usage

All values larger than 0 are deemed as OK, so it is suggested to use the `QM` band in the following way for selecting valid areas:
`QM != 0`

## More information

### Representative Images

![World mosaic 2020](world_mosaic_2020.png)

*World mosaic, using 2020 Sentinel-2 L2A data.*


![World mosaic 2020, blue marble background](world_mosaic_2020_blue_marble.png)

*World mosaic 2020 on blue marble background with sea ice index information*


