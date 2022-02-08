// Script for land cover classification visualisation
//VERSION=3
function setup() {
    return {
      input: [{
        bands: [
          "OCS"
        ]
      }],
      output: {
        bands: 4
      }
    }
  }
  
  function evaluatePixel(samples) {
      const val = samples.OCS;
        if (val == 1) {
          return [1, 0, 1, 1];
      } else if (val == 2) {
          return [1, 85/255, 1, 1];
      } else if (val == 3) {
          return [1, 170/255, 1, 1];
      } else if (val == 4) {
          return [0, 1, 1, 1];
      } else if (val == 5) {
          return [1, 1, 0, 1];
      } else if (val == 6) {
          return [208/255, 1, 0, 1];
      } else if (val == 7) {
          return [161/255, 214/255, 0, 1];
      } else if (val == 8) {
          return [1, 171/255, 68/255, 1];
      } else if (val == 9) {
          return [214/255, 214/255, 0, 1];
      } else if (val == 10) {
          return [1, 85/255, 0, 1];
      } else if (val == 11) {
          return [197/255, 1, 1, 1];
      } else if (val == 12) {
          return [170/255, 170/255, 97/255, 1];
      } else if (val == 13) {
          return [170/255, 170/255, 0, 1, 1];
      } else if (val == 14) {
          return [170/255, 170/255, 1, 1];
      } else if (val == 15) {
          return [85/255, 0, 0, 1];
      } else if (val == 16) {
          return [0, 156/255, 0, 1];
      } else if (val == 17) {
          return [0, 50/255, 0, 1];
      } else if (val == 18) {
          return [170/255, 250/255, 0, 1];
      } else if (val == 19) {
          return [85/255, 170/255, 127/255, 1];
      } else if (val == 20) {
          return [1, 0, 0, 1];
      } else if (val == 21) {
          return [1, 184/255, 2/255, 1];
      } else if (val == 22) {
          return [190/255, 190/255, 190/255, 1];
      } else if (val == 23) {
          return [0, 0, 1, 1];
      } else if (val == 0 || val == 255) {
          return [1, 1, 1, 0];
      } else {
          return [0, 0, 0, 1];
      }
  }

// Script for land cover confidence visualisation
//VERSION=3
function setup() {
    return {
      input: [{
        bands: [
          "OCS_Confidence"
        ]
      }],
      output: {
        bands: 4
      }
    }
  }
  
  const ramps = [
    [0, 0x000000],
    [100, 0x00c800 ],
  ];
  
  const visualizer = new ColorRampVisualizer(ramps);
  
  function evaluatePixel(samples) {
    let val = samples.OCS_Confidence;
    let rgb_triplet = visualizer.process(val);
    if (val == 0 || val > 100) {
        rgb_triplet.push(0)
    } else {
        rgb_triplet.push(1)
    }
    return rgb_triplet;
  }

// Script for land cover validity visualisation
//VERSION=3
function setup() {
    return {
      input: [{
        bands: [
          "OCS_Validity"
        ]
      }],
      output: {
        bands: 4
      }
    }
  }
  
  const ramps = [
    [0, 0x000000],
    [45, 0xe60000 ],
  ];
  
  const visualizer = new ColorRampVisualizer(ramps);
  
  function evaluatePixel(samples) {
    let val = samples.OCS_Validity;
    let rgb_triplet = visualizer.process(val);
    if (val == 0) {
        rgb_triplet.push(0)
    } else {
        rgb_triplet.push(1)
    }
    return rgb_triplet;
  }
