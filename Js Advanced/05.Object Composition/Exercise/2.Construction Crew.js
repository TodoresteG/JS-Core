function solve(workerObj) {
    if (workerObj.dizziness === true) {
        const hydratation = (0.1 * workerObj.weight) * workerObj.experience;
        workerObj.levelOfHydrated += hydratation;
        workerObj.dizziness = false;
    }

    return workerObj;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );