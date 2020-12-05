import { erf } from "@tensorflow/tfjs";
import * as fp from "fingerpose";

const thumbsUpGesture = new fp.GestureDescription('thumbs_up');

thumbsUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsUpGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, -2.0);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, -2.0);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, -2.0);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, -2);
thumbsUpGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, -2);
// do this for all other fingers
thumbsUpGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, -5.0);
thumbsUpGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

export default thumbsUpGesture;