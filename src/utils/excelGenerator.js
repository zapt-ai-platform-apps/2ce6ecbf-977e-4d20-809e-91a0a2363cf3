import { utils, writeFile } from 'xlsx';

export async function generateExcelFile(students) {
  console.log('Starting Excel generation with', students.length, 'students');
  
  // Create new workbook
  const wb = utils.book_new();

  // Helper function to create worksheet
  const createWorksheet = (name, headers, data) => {
    const ws = utils.aoa_to_sheet([headers, ...data]);
    utils.book_append_sheet(wb, ws, name);
    return ws;
  };

  // 1. Main Student List Sheet
  const studentData = students.map(student => [
    student.id,
    student.lastName,
    student.firstName,
    student.birthDate,
    student.gender,
    student.class
  ]);
  createWorksheet('SAISIE LISTE DE LA CLASSE', 
    ['Numéro', 'Nom', 'Prénom', 'Date de naissance', 'Sexe', 'Classe'], 
    studentData
  );

  // 2. Class-specific Sheets
  const classes = ['CP', 'CE1', '6ème'];
  classes.forEach(cls => {
    const classStudents = students.filter(s => s.class === cls);
    createWorksheet(cls, 
      ['Numéro', 'Nom', 'Prénom', 'Date de naissance', 'Sexe'], 
      classStudents.map(s => [s.id, s.lastName, s.firstName, s.birthDate, s.gender])
    );
  });

  // 3. Trimester Sheets
  const trimesters = ['PREMIER TRIMESTRE', 'DEUXIEME TRIMESTRE', 'TROISIEME TRIMESTRE'];
  trimesters.forEach(trim => {
    createWorksheet(trim, 
      ['Numéro', 'Nom', 'Prénom', 'Matière', 'Note'], 
      students.map(s => [s.id, s.lastName, s.firstName, '', ''])
    );
  });

  // 4. Report Card Sheet
  createWorksheet('BULLETIN DE NOTES', 
    ['Nom de l\'élève', 'Classe', 'Trimestre', 'Matières', 'Notes obtenues', 'Moyenne générale', 'Appréciation'],
    students.map(s => [s.firstName + ' ' + s.lastName, s.class, '', '', '', '', ''])
  );

  // 5. Annual Averages Sheet
  createWorksheet('MOYENNES ANNUELLES', 
    ['Numéro', 'Nom', 'Prénom', 'Moyenne T1', 'Moyenne T2', 'Moyenne T3', 'Moyenne Annuelle'],
    students.map(s => [s.id, s.lastName, s.firstName, '', '', '', ''])
  );

  // 6. Main Menu Sheet
  const menuSheet = utils.aoa_to_sheet([
    ['MENU DE NAVIGATION'],
    ...wb.SheetNames.map(name => [name, { t: 's', v: `=HYPERLINK("#${name}!A1", "Aller à ${name}")` }])
  ]);
  utils.book_append_sheet(wb, menuSheet, 'MENU PRINCIPAL');

  // Set column widths
  wb.Sheets['MENU PRINCIPAL']['!cols'] = [{ wch: 25 }, { wch: 20 }];

  // Write and download file
  writeFile(wb, 'gestion_scolaire.xlsx');
  console.log('Excel file generated successfully');
}