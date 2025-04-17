var APP_DATA = {
  "scenes": [
    {
      "id": "0-outdoor",
      "name": "outdoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.43540520691114537,
        "pitch": -0.10055944332978939,
        "fov": 1.6738992721146955
      },
      "linkHotspots": [
        {
          "yaw": 0.023095766783370664,
          "pitch": 0.02005926733475505,
          "rotation": 0,
          "target": "1-int"
        },
        {
          "yaw": 0.9453233820927807,
          "pitch": -0.01559729174350899,
          "rotation": 5.497787143782138,
          "target": "2-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-int",
      "name": "int",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5882631893234418,
          "pitch": 0.03210936285144683,
          "rotation": 7.853981633974483,
          "target": "0-outdoor"
        },
        {
          "yaw": -0.32722729101300274,
          "pitch": -0.016333970069034365,
          "rotation": 4.71238898038469,
          "target": "2-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garden",
      "name": "garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8019302398316217,
          "pitch": 0.03255917603022063,
          "rotation": 5.497787143782138,
          "target": "0-outdoor"
        },
        {
          "yaw": -1.6350536678800616,
          "pitch": 0.012340493203501168,
          "rotation": 4.71238898038469,
          "target": "1-int"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
