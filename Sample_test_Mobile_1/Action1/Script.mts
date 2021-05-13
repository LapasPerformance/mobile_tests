Device("Device").App("NBG").MobileEdit("MobileEdit").SetFocus
Device("Device").EnterKeys 0,"sandboxUserIB"
Device("Device").App("NBG").MobileButton("Next").Tap
Device("Device").App("NBG").MobileEdit("MobileEdit_2").SetFocus
Device("Device").EnterKeys 0,"sandboxUserIB22"
Device("Device").App("NBG").MobileButton("Login").Tap
Device("Device").App("NBG").MobileLabel("Fast Login").Tap
Device("Device").App("NBG").MobileObject("MobileObject").Tap
Device("Device").App("NBG").MobileLabel("Accounts").Tap
Device("Device").App("NBG").MobileObject("MobileObject").Tap
Device("Device").App("NBG").MobileButton("MobileButton").Tap

