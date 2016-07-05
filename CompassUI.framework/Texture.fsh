//
//  KnockoutShader.fsh
//  GLTest
//
//  Created by Joshua Weinberg on 7/2/13.
//  Copyright (c) 2013 Joshua Weinberg. All rights reserved.
//

varying lowp vec4 colorVarying;
varying mediump vec2 texVarying;
uniform sampler2D tex;

void main()
{
    gl_FragColor = texture2D(tex, texVarying) * colorVarying;
}
