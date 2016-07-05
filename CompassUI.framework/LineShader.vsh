attribute vec4 position;
attribute vec4 color;
attribute vec4 normal;

varying lowp float width;
varying vec4 colorVarying;
varying float distanceFromLine;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

#define PHYSICAL_WIDTH 2.0

void main()
{
    colorVarying = color;
    width = normal.w;
    distanceFromLine = normal.z * PHYSICAL_WIDTH;
    gl_Position = projectionMatrix * modelViewMatrix * (position + PHYSICAL_WIDTH * vec4(normal.xy, 0.0, 0.0));
}
