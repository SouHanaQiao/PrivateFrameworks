//
//  PKContact_WebKit.h
//  Wallet
//
//  Created by Nick Shearer on 3/2/16.
//  Copyright © 2016 Apple, Inc. All rights reserved.
//

#import "PKContact.h"

@interface PKContact() <NSSecureCoding>

- (instancetype)initWithDictionary:(NSDictionary<NSString *, id> *)dictionary error:(NSError **)error;
- (NSDictionary *)dictionaryRepresentation;

@end