//
//  RNIconActionSheet.m
//  RNIconActionSheet
//
//  Created by Daniel Xavier Araújo on 27/02/2019.
//  Copyright © 2019 RNIconActionSheet. All rights reserved.
//

#import "RNIconActionSheet.h"

#import <React/RCTBridge.h>
#import <React/RCTConvert.h>
#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTUtils.h>

@interface RNIconActionSheet ()
@end

@implementation RNIconActionSheet{}

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

/*
 * The `anchor` option takes a view to set as the anchor for the share
 * popup to point to, on iPads running iOS 8. If it is not passed, it
 * defaults to centering the share popup on screen without any arrows.
 */
- (CGRect)sourceRectInView:(UIView *)sourceView anchorViewTag:(NSNumber *)anchorViewTag
{
    if (anchorViewTag) {
        UIView *anchorView = [self.bridge.uiManager viewForReactTag:anchorViewTag];
        return [anchorView convertRect:anchorView.bounds toView:sourceView];
    } else {
        return (CGRect){sourceView.center, {1, 1}};
    }
}

RCT_EXPORT_METHOD(showActionSheetWithOptions:(NSDictionary *)options callback:(RCTResponseSenderBlock)callback)
{
    if (RCTRunningInAppExtension()) {
        RCTLogError(@"Unable to show action sheet from app extension");
        return;
    }
    
    NSString *title = [RCTConvert NSString:options[@"title"]];
    NSString *message = [RCTConvert NSString:options[@"message"]];
    NSArray<NSDictionary *> *buttons = [RCTConvert NSDictionaryArray:options[@"options"]];
    NSInteger destructiveButtonIndex = options[@"destructiveButtonIndex"] ? [RCTConvert NSInteger:options[@"destructiveButtonIndex"]] : -1;
    NSInteger cancelButtonIndex = options[@"cancelButtonIndex"] ? [RCTConvert NSInteger:options[@"cancelButtonIndex"]] : -1;
    
    UIViewController *controller = RCTPresentedViewController();
    
    if (controller == nil) {
        RCTLogError(@"Tried to display action sheet but there is no application window. options: %@", options);
        return;
    }
    
    /*
     * The `anchor` option takes a view to set as the anchor for the share
     * popup to point to, on iPads running iOS 8. If it is not passed, it
     * defaults to centering the share popup on screen without any arrows.
     */
    NSNumber *anchorViewTag = [RCTConvert NSNumber:options[@"anchor"]];
    UIView *sourceView = controller.view;
    CGRect sourceRect = [self sourceRectInView:sourceView anchorViewTag:anchorViewTag];
    
    UIAlertController *alertController =
    [UIAlertController alertControllerWithTitle:title message:message preferredStyle:UIAlertControllerStyleActionSheet];
    
    NSInteger index = 0;
    for (NSDictionary *option in buttons) {
        UIAlertActionStyle style = UIAlertActionStyleDefault;
        if (index == destructiveButtonIndex) {
            style = UIAlertActionStyleDestructive;
        } else if (index == cancelButtonIndex) {
            style = UIAlertActionStyleCancel;
        }
        
        NSInteger localIndex = index;
        UIAlertAction *action = [UIAlertAction actionWithTitle:[option valueForKey:@"title"] style:style handler:^(__unused UIAlertAction *action){
            callback(@[@(localIndex)]);
        }];

        if ([option objectForKey:@"icon"]) {
            UIImage *image = [RCTConvert UIImage:[option valueForKey:@"icon"]];
            [action setValue:image forKey:@"image"];
        }

        if ([option objectForKey:@"titleTextAlignment"]) {
            NSNumber *titleTextAlignment = [RCTConvert NSNumber:[option valueForKey:@"titleTextAlignment"]];
            [action setValue:titleTextAlignment forKey:@"titleTextAlignment"];
        }
        
        if ([option objectForKey:@"titleTextColor"]) {
            UIColor *titleTextColor = [RCTConvert UIColor:[option valueForKey:@"titleTextColor"]];
            [action setValue:titleTextColor forKey:@"titleTextColor"];
        }
        
        [alertController addAction: action];
        index++;
    }
    
    alertController.modalPresentationStyle = UIModalPresentationPopover;
    alertController.popoverPresentationController.sourceView = sourceView;
    alertController.popoverPresentationController.sourceRect = sourceRect;

    if (!anchorViewTag) {
        alertController.popoverPresentationController.permittedArrowDirections = 0;
    }

    [controller presentViewController:alertController animated:YES completion:nil];
    
    alertController.view.tintColor = [RCTConvert UIColor:options[@"tintColor"]];
}

@end
