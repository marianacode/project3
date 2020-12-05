import { erf } from "@tensorflow/tfjs";
import * as fp from "fingerpose";

const thumbsDownGesture = new fp.GestureDescription('thumbs_down');

thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, -2.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, -2.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, -2.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, -2);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, -2);
// do this for all other fingers
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, -5.0);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

export default thumbsDownGesture;