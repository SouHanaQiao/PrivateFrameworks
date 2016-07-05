//
//  Shader.fsh
//  ThinLines
//
//  Created by Justin Hensley on 4/1/13.
//
//

precision highp float;

varying highp float distanceFromLine;
varying lowp vec4 colorVarying;
varying lowp float width;

// this is mis-named since its now a gaussian
uniform float lanczos_filter[40];

#define SOLID_SIZE 0.75
#define FALLOFF_SIZE 1.0

void main()
{
    // clear color since we're assuming this is the background item
    // this lets us get away with no doing framebuffer fetch or alpha
    // blending, which is a "good thing"
    vec4 clear = vec4(0.0, 0.0, 0.0, 1.0);
    
    // compute distance from centerline
    float dist = abs(distanceFromLine);
    
    float ratio = (dist - (width - SOLID_SIZE)) / FALLOFF_SIZE;
    
    // handle when we're when we are fully covered
    ratio = ( dist < width - SOLID_SIZE ) ? 0.0 : ratio;
    
    // handle when we're when we are fully not covered
    ratio = ( dist > (width - SOLID_SIZE + FALLOFF_SIZE )) ? 1.0 : ratio;
    
    // this is based on the number of taps in the input.
    // Only go to 38 since we fetch value+1
    float fidx = ratio*38.0;
    
    // compute index and fraction
    float ftrunc = floor( fidx );
    float ffrac = fidx - ftrunc;
    
    // linearly interpolate between the two closest places in the table
    // On some devices this might be better done with a texture fetch,
    // but a dependent fetch on SGX devices isn't very efficient
    // normalization done in the host program
    float alpha = mix( lanczos_filter[ int(ftrunc) ], lanczos_filter[ int(ftrunc)+1 ], ffrac );
    
    // blend versus the background which assumes its a static color (note - tics can't overlap)
    gl_FragColor = clamp( mix( clear, colorVarying, alpha ), 0.0, 1.0);
    
    // apply gamma
    gl_FragColor.rgb = pow( gl_FragColor.rgb, vec3(1.0/2.2));
    gl_FragColor.a = alpha; // alpha for the knock shader
}