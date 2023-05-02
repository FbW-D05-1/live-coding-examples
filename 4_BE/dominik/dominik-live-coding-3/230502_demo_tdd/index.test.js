// FizzBuzz
// Schreibe eine Funktion, die eine Zahl übergeben bekommt und "Fizz" (wenn durch 3 teilbar),
// "Buzz" (wenn durch 5 teilbar), "FizzBuzz" (wenn durch 3 und 5 teilbar) oder die Zahl selbst ausgibt.

// Wir wenden die Methodik des Test Driven Development (TDD) an.
// Das heißt:
// 1. Wir schreiben zuerst einen Testfall, der fehlschlagen wird,
// da noch kein passender Code existiert ("Red").

// 2. Anschließend implementieren wir gerade so viel Code, dass der Test erfolgreich durchläuft ("Green").
// Ganz wichtig: Wir schreiben nicht mehr Code als absolut nötig.
// Wenn bspw. nach einem Boolean gefragt wird, geben wir einfach nur true oder false zurück.
// Die weitere Logik muss durch die folgenden Tests erzwungen werden.
// Zwingt euch durch die Tests zum Arbeiten und macht nichts extra :-)

// 3. Wir prüfen, ob der Code in der aktuellen Form bereits optimal geschrieben ist und verbessern, wenn nötig ("Refactor").
// Auch in diesem Schritt implementieren wir keine neue Logik. Das muss wieder durch einen neuen Test passieren.
// Das Refactoring soll somit nur dafür sorgen, dass der bestehende Code besser wird.
// Achtet natürlich auf die Tests! Diese sollten weiterhin erfolgreich durchlaufen.

// Diese drei Schritte wiederholen wir, bis alle Anforderungen erfüllt sind, die Aufgabe also erledigt ist.

// ----------------

// Diese Datei wird durch Jest automatisch eingelesen und verarbeitet.
// Wenn wir den Befehl "npm test" aufrufen, startet Jest mit einem File Watcher, der sämtliche Dateiänderungen wie nodemon überwacht
// und die Tests automatisch ausführt.

// Weitere Informationen zu Jest: https://jestjs.io/docs/getting-started

// Wir importieren unsere Funktionen, die wir testen wollen.
// Beim Unit Testing prüfen wir einzelne Bausteine unseres Systems.
// Dank der Aufteilung in separate Module in Dateien ist eine gewisse Struktur bereits vorgegeben,
// an der wir uns orientieren können.
// Wir erstellen für jedes Modul mindestens eine Test-Datei für die Unit Tests.
const { fizzBuzz, divisibleBy } = require("./index");

// Wir beschreiben eine "Test Suite", also eine Gruppe von einzelnen Tests.
describe("FizzBuzz", () => {
    // In dieser Gruppe testen wir uns Schritt für Schritt zum Ziel: Red - Green - Refactor
    test("ist eine Funktion", () => {
        expect(fizzBuzz).toBeInstanceOf(Function);
    });

    test("gibt einen Wert zurück", () => {
        expect(fizzBuzz(2)).not.toBe(undefined);
    });

    test("wenn Zahl nicht durch 3 oder 5 teilbar: gibt die übergebene Zahl zurück", () => {
        expect(fizzBuzz(17)).toBe(17);
        expect(fizzBuzz(22)).toBe(22);
        expect(fizzBuzz(4)).toBe(4);
    });

    test("wenn Zahl durch 3 teilbar: gibt 'Fizz' zurück", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    test("wenn Zahl durch 5 teilbar: gibt 'Buzz' zurück", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    test("wenn Zahl durch 3 und 5 teilbar: gibt 'FizzBuzz' zurück", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
});

// --------------------------
// Dieser Teil könnte ein separates Modul in einer eigenen Datei sein.
// Zu Demo-Zwecken ist es hier in dieser Datei aufgeführt, bzw. getestet.
describe("divisibleBy", () => {
    test("ist eine Funktion", () => {
        expect(divisibleBy).toBeInstanceOf(Function);
    });

    test("gibt einen Boolean zurück", () => {
        expect(typeof divisibleBy()).toBe("boolean");
    });

    test("wenn die erste Zahl durch die zweite Zahl teilbar: gibt true zurück", () => {
        expect(divisibleBy(10, 5)).toBe(true);
        expect(divisibleBy(6, 2)).toBe(true);
    });

    test("wenn die erste Zahl nicht durch die zweite Zahl teilbar: gibt false zurück", () => {
        expect(divisibleBy(10, 4)).toBe(false);
        expect(divisibleBy(6, 7)).toBe(false);
    });
});

// Unit Tests (und Testing im Allgemeinen) helfen uns, unseren Code nachweislich korrekt zu schreiben.
// Wir schaffen uns damit außerdem die Sicherheit, Änderungen am Code vorzunehmen, ohne etwas kaputt zu machen.
// Sollte doch mal etwas schief laufen, werden wir direkt in den Tests auf das Problem hingewiesen.

// Für uns lohnt es sich immer, (einfache) Tests in unsere Projekte einzubinden.
// Dabei hilft uns besonders das Test Driven Development, um unseren Code Schritt für Schritt aufzubauen,
// statt einfach "drauf loszucoden".
