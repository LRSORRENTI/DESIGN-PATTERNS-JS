// Practice Liskov substitution principle

class Golf {
   requiresEquipment: true;
   requiresPractice: true;
}

class MidRange extends Golf {
    irons: true;
    woods: true;
}


class Driving extends MidRange {
    drivers: true;
}


class ShortGame extends Golf {
    chipping: true;
    pitching: true;
    putting: true;
    equipmentNeeded: string;
}