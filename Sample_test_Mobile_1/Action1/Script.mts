
Device("Device").App("NBG").MobileEdit("Username").SetFocus
Device("Device").Enterkeys 0, "sandboxUserIB"
Device("Device").App("NBG").MobileButton("Next").Tap
Device("Device").App("NBG").MobileEdit("Password").SetFocus
Device("Device").Enterkeys 0, "sandboxUserIB22"
Device("Device").App("NBG").MobileButton("Login").Tap
Device("Device").App("NBG").MobileObject("Close, Button").Tap
Device("Device").App("NBG").MobileObject("MobileObject").Tap
Device("Device").App("NBG").MobileButton("MobileButton").Tap
Device("Device").App("NBG").MobileButton("OK").Tap 213,51
'test
