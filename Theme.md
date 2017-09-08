# Guide
## Image Elements
Image elements are defined under the "images" section in the manifest.json file.
#### Picture dimensions:
+ Frame                             64x128
+ frame_default_inactive            64x128
+ ntp_background                    Whatever resolution you want
+ theme_button_background           120x120
+ theme_tab_background              64x128
+ theme_tab_background_glass        64x128
+ theme_tab_background_incognito    64x128
+ theme_toolbar                     64x128
```json
"images":
{
  "theme_frame": "bg.png",
  "theme_frame_overlay": "bg.png",
  "theme_ntp_background": "bg.png",
  "theme_ntp_attribution": "bg.png"
}
```
Number | Description | manifest.json Notation | Recommended Size (W x H)
------ | ----------- | ---------------------- | -----------
1 | The frame of the chrome browser/the area that is behind the tabs. | "theme_frame" | ∞ x 80 |
1.1 | The same area as above, only that this represents the inactive state. | "theme_frame_inactive"
1.2 | The same area under the incognito mode, when the window is active | "theme_frame_incognito"
1.3 | The same area but in the incognito mode, when the window is inactive. | "theme_frame_incognito_inactive"
2 | This represents both the current tab and the toolbar together | "theme_toolbar" | ∞ x 120
3 | This is the area that covers the tabs that are not active | "theme_tab_background" | ∞ x 65
3.1 | The same thing as above, but used for the incognito mode | "theme_tab_background_incognito"
4 | (Not yet confirmed) The tab background for something! | "theme_tab_background_v"
5 | This is the theme's inner background-the large white space is covered by this | "theme_ntp_background" | Minimum Size for images 800 x 600
6 | This is the image that appears at the top left of the frame | "theme_frame_overlay" | 1100 x 40
6.1 | Same as above but displayed when window is inactive | "theme_frame_overlay_inactive"
7 | This is the area that covers the toolbar buttons | "theme_button_background" | 30 x 30
8 | This is the image that will be displayed in the 'theme created by' section | "theme_ntp_attribution"
9 | The background for the window control buttons (close, maximize, etc.,) | "theme_window_control_background"

## Color Elements
Color elements are defined under the "colors" section in the manifest.json file.
```json
"colors": {
  "frame": [
    20,
    20,
    20
  ],
  "toolbar": [
    100,
    100,
    100
  ]
}
```
Number | Description | manifest.json Notation
------ | ----------- | ----------------------
10 | The color of the frame, that covers the smaller outer frame | "frame"
10.1 | The color of the same element, but in inactive mode | "frame_inactive"
10.2 | The color of the same element, but in incognito mode | "frame_incognito"
10.3 | The color of the same element, but in incognito, inactive mode | "frame_incognito_inactive"
10.4 | The color of the toolbar background (visible by pressing Ctrl+B) | "toolbar"
11 | The color of text, in the title of current tab | "tab_text"
12 | The color of text, in the title of all inactive tabs | "tab_background_text"
13 | The color of the bookmark element's text | "bookmark_text"
14 | The theme's inner background color | "ntp_background"
14.1 | The color of all the text that comes in the inner background area | "ntp_text"
14.2 | The color of the links that appear in the background area | "ntp_link"
14.3 | The color of the underline of all links in the background area | "ntp_link_underline"
14.4 | The color of the section frames when mouse over | "ntp_header"
14.5 | The color of Recently closed tabs area's bg and frame of quick links | "ntp_section"
14.6 | The color of text in the section | "ntp_section_text"
14.7 | The color of the links that appear in the section area | "ntp_section_link"
14.8 | The color of underline of links in the section area | "ntp_section_link_underline"
15 | Unconfirmed yet-The color of the window control buttons (close, maximize, etc.) | "control_background"
16 | The background color of all the toolbar buttons | "button_background"

## Tint Elements
Tint elements change the hue, saturation and lightness of images.
```json
"tints": {
  "frame": [
    20,
    20,
    20
  ],
  "toolbar": [
    100,
    100,
    100
  ]
}
```
Number | Description | manifest.json Notation
------ | ----------- | ----------------------
17 | The color tint that can be applied to various buttons in chrome | "buttons"
18 | The color tint that can be applied to the frame of chrome | "frame"
18.1 | The color tint that is applied when the chrome window is inactive | "frame_inactive"
18.2 | The color tint to the frame-in incognito mode | "frame_incognito"
18.3 | Same as above, but when the window is inactive (and in incognito mode) | "frame_incognito_inactive"
19 | The color tint of the inactive tabs in incognito mode | "background_tab"

## UI Property Elements
Property elements come under the "properties" section in the manifest.json file.
```json
"properties": {
  "frame": [
    20,
    20,
    20
  ],
  "toolbar": [
    100,
    100,
    100
  ]
}
```
Number | Description | manifest.json Notation
------ | ----------- | ----------------------
20 | The property that tells the alignment of the inner backrground image | "ntp_background_alignment"
21 | This property specifies if the above background should be repeated | "ntp_background_repeat"
22 | This lets you select the type of google chrome header you want | "ntp_logo_alternate"

## UI Property Elements
Property elements come under the "properties" section in the manifest.json file.
```json
"properties": {
  "frame": [
    20,
    20,
    20
  ],
  "toolbar": [
    100,
    100,
    100
  ]
}
```
Number | Description | manifest.json Notation
------ | ----------- | ----------------------
20 | The property that tells the alignment of the inner backrground image | "ntp_background_alignment"
21 | This property specifies if the above background should be repeated | "ntp_background_repeat"
22 | This lets you select the type of google chrome header you want | "ntp_logo_alternate"
