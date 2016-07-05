//
//  KnockoutShader.fsh
//  GLTest
//
//  Created by Joshua Weinberg on 6/13/13.
//  Copyright (c) 2013 Joshua Weinberg. All rights reserved.
//

#extension GL_EXT_shader_framebuffer_fetch :require

varying lowp vec4 colorVarying;

void main()
{
    lowp vec4 lastFrag = gl_LastFragData[0];
    
    lowp vec4 color = lastFrag.a > 0.0 ? vec4(1.0 - lastFrag.a, 1.0 - lastFrag.a, 1.0 - lastFrag.a, 1.0) : colorVarying;

    gl_FragColor = color;
}
