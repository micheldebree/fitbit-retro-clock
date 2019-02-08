#!/bin/sh
# Convert a PNG to 8-bit grayscale to use 'Image Grayscale Magic'
# Uses ImageMagick
# See https://dev.fitbit.com/build/guides/user-interface/css/#image-grayscale-magic-
convert "$1" -colorspace gray "$1-gray"
