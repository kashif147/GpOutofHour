export type Encounter = {
  encounterID: string;
  callDateTime: string;
  callerIsPatient: boolean;
  caller: {
    callerName: string;
    callerRelationship: string;
    callerContactNo: string;
    isCallBackNumber: boolean;
  };
  patient: {
    patientID: string;
    dob: string;
    dobUnKnown: boolean;
    age: string;
    isApproxAge: boolean;
    firstName: string;
    lastName: string;
    gender: string;
    callBackNumber: string;
    ppsN: string;
    email: string;
    homeLocation: {
      homeOrBuilding: string;
      street: string;
      areaOrTown: string;
      cityOrCounty: string;
      eirCode: string;
      isSetToCurrentLocation: boolean;
      isBillingAddress: boolean;
    };
    currentLocation: {
      homeOrBuilding: string;
      street: string;
      areaOrTown: string;
      cityOrCounty: string;
      eirCode: string;
      isSetToCurrentLocation: boolean;
      isBillingAddress: boolean;
      expiryDatetime: string;
    };
    homeContact: { contact: string; isCallBackNumber: boolean };
    mobileContact: { contact: string; isCallBackNumber: boolean };
    otherContact: { contact: string; isCallBackNumber: boolean };
    medicalCover: {
      coverType: string;
      cardNumber: string;
      expiryDate: string;
    };
    gpDetails: { registrationStatus: string; gp: string; surgery: string };
    presentingComplaints: { complaint: string }[];
    additionalNotes: string;
    priority: string;
    priorityComments: string;
  };
};

export type presentingComplaint = {
  complaint: string;
};
