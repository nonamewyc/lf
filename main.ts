function lf () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
            }
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                }
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
                } else {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                }
            }
        }
    }
}
basic.forever(function () {
    lf()
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
