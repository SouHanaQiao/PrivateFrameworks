//
//  Shader.fsh
//  GLTest
//
//  Created by Joshua Weinberg on 6/13/13.
//  Copyright (c) 2013 Joshua Weinberg. All rights reserved.
//

varying lowp vec4 colorVarying;

void main()
{
    gl_FragColor = colorVarying;
}
