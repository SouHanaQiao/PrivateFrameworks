//
//  PKPaymentRequest_WebKit.h
//  Wallet
//
//  Created by Nick Shearer on 3/9/16.
//  Copyright © 2016 Apple, Inc. All rights reserved.
//

#import <PassKitCore/PKPayment.h>

@interface PKPayment() <NSSecureCoding>

- (NSDictionary *)dictionaryRepresentation;

@end