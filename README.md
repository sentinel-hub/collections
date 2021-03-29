# Sentinel Hub Public Collections

A repository of publicly available collections that are available for access through [Sentinel Hub](https://www.sentinel-hub.com/). Note that collections in this registry are available via Sentinel Hub, but owned and maintained by different providers.

## What is it for?

When data is shared on Sentinel Hub, anyone can analyze it and build services on top of it using a broad range of compute and data analytics products. Sharing data in the cloud lets data users spend more time on data analysis rather than data acquisition. This repository exists to help people promote and discover datasets that are available via Sentinel Hub resources.

## Logos
You can add logos to the `src/img/logos` directory for use in the **detail**  pages. Logos should be square PNGs and are currently sized down to 100px x 100px for display. The name of the logo file that the template looks for is tied to the entry in the `ManagedBy` data field. Spaces are replaced with '-' and special characters are removed. If the `ManagedBy` field is using markdown, the link text field is used, otherwise, the entire string is used to generate the logo path for testing.

## Endpoints
- `/` - Main datasets listing page, provides search mechanism.
- `ex: /sentinel-2-l1c` - Individual detail pages for each collection, contains details, license, contact, documentation and example usage links and resources available.
- `/usage-examples/` - Lists all usage examples grouped by collection.
- `/index.yaml` - YAML formatted listing of each individual YAML file for provided collections. 
- `/index.ndjson` - NDJSON formatted listing of each individual YAML file for provided collections.
- `ex: /tag/satellite-imagery/` - Tag-subsetted view of the main collection listing page.
- `ex: /tag/satellite-imagery/usage-examples/` - Tag-subsetted list usage examples grouped by collection.
- `ex: /tag/satellite-imagery/datasets.yaml` - YAML for all datasets associated with a tag.
- `ex: /collections/sentinel-2-l1c.yaml` - YAML for individual collection, used to create the HTML pages.
- `/sitemap.txt` - Sitemap listing all the HTML pages.
- `/providers.html` - A simple listing of logos of data providers.

## Redirects
By using the redirects map in `src/config.yaml` you can set up simple HTML redirects from `source` to `target`. This does not copy any content, simply creates a new HTML page. This function runs after other HTML content is generated so it can be used to create new or overwrite existing HTML pages.

## Attribution
This application is based on [Open Data Registry](https://github.com/awslabs/open-data-registry) by AWS Open Data team. 

