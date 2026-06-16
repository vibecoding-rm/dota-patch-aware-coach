import { useState } from "react";
import { BRACKET_LABELS, HEROES, type Bracket, type MockReplayReport, getDefaultMockReport } from "@/data/dota";
import { APP_CONFIG } from "@/config/constants";

function cloneReport(report: MockReplayReport | undefined): MockReplayReport | null {
  return report ? (JSON.parse(JSON.stringify(report)) as MockReplayReport) : null;
}

export function useCoachWorkspace() {
  const [students, setStudents] = useState([
    {
      id: APP_CONFIG.DEFAULT_STUDENT_ID,
      name: "Maikel 'Lobo' S.",
      MMR: "Archon",
      favoriteHero: "Viper",
      lastReport: getDefaultMockReport().matchId,
    },
    { id: "student-2", name: "Carlos 'Gank' M.", MMR: "Legend", favoriteHero: "Axe", lastReport: "Ninguno" },
    { id: "student-3", name: "Santi 'Support' F.", MMR: "Guardian", favoriteHero: "Crystal Maiden", lastReport: "Ninguno" },
  ]);
  const [activeStudentId, setActiveStudentId] = useState<string>(APP_CONFIG.DEFAULT_STUDENT_ID);
  const [academyName, setAcademyName] = useState(APP_CONFIG.DEFAULT_ACADEMY_NAME);
  const [brandingColor, setBrandingColor] = useState<string>(APP_CONFIG.DEFAULT_BRANDING_COLOR);
  const [coachReport, setCoachReport] = useState<MockReplayReport | null>(() =>
    cloneReport(getDefaultMockReport()),
  );
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMMR, setNewStudentMMR] = useState<Bracket>("archon");
  const [newStudentHero, setNewStudentHero] = useState("viper");

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const newStudent = {
      id: `student-${Date.now()}`,
      name: newStudentName,
      MMR: BRACKET_LABELS[newStudentMMR],
      favoriteHero: HEROES.find((h) => h.id === newStudentHero)?.name || newStudentHero,
      lastReport: "Ninguno",
    };

    setStudents([...students, newStudent]);
    setActiveStudentId(newStudent.id);
    setCoachReport(null);
    setNewStudentName("");
  };

  const handleDeleteStudent = (id: string) => {
    if (students.length <= 1) return;
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    if (activeStudentId === id) {
      setActiveStudentId(updated[0].id);
      setCoachReport(
        updated[0].id === APP_CONFIG.DEFAULT_STUDENT_ID ? cloneReport(getDefaultMockReport()) : null,
      );
    }
  };

  const handleSelectStudent = (id: string) => {
    setActiveStudentId(id);
    setCoachReport(id === APP_CONFIG.DEFAULT_STUDENT_ID ? cloneReport(getDefaultMockReport()) : null);
  };

  return {
    students,
    activeStudentId,
    handleSelectStudent,
    newStudentName,
    setNewStudentName,
    newStudentMMR,
    setNewStudentMMR,
    newStudentHero,
    setNewStudentHero,
    handleAddStudent,
    handleDeleteStudent,
    academyName,
    setAcademyName,
    brandingColor,
    setBrandingColor,
    coachReport,
    setCoachReport,
  };
}
