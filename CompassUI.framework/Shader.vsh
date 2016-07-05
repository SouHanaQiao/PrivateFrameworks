//
//  Shader.vsh
//  GLTest
//
//  Created by Joshua Weinberg on 6/13/13.
//  Copyright (c) 2013 Joshua Weinberg. All rights reserved.
//

attribute vec4 position;
attribute vec4 color;
attribute vec2 texCoord;

varying vec4 colorVarying;
varying vec2 texVarying;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main()
{
    colorVarying = color;
    texVarying = texCoord;
    gl_Position = projectionMatrix * modelViewMatrix * position;
}

