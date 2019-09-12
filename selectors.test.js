const { Selectors } = require('../src/index');

const toHaveOwnProperty = (buc, name) => expect(Selectors[buc]).to.have.property(name);

describe('Selectors', () => {
  const awBucer = [
    'AW_BUC_06a', 'AW_BUC_06b', 'AW_BUC_06c',
    'AW_BUC_07a', 'AW_BUC_07b', 'AW_BUC_07c', 'AW_BUC_07d',
    'AW_BUC_08',
    'AW_BUC_09a', 'AW_BUC_09b',
    'AW_BUC_10a', 'AW_BUC_10b',
    'AW_BUC_11', 'AW_BUC_12', 'AW_BUC_13', 'AW_BUC_14', 'AW_BUC_15', 'AW_BUC_23'
  ];
  const fbBucer = ['FB_BUC_01', 'FB_BUC_02', 'FB_BUC_03', 'FB_BUC_04'];
  const hzBucer = [
    'H_BUC_01',
    'H_BUC_02a', 'H_BUC_02b', 'H_BUC_02c',
    'H_BUC_03a', 'H_BUC_03b',
    'H_BUC_04', 'H_BUC_05', 'H_BUC_06', 'H_BUC_07',
    'H_BUC_08', 'H_BUC_09', 'H_BUC_10'
  ];
  const laBucer = [
    'LA_BUC_01', 'LA_BUC_02', 'LA_BUC_03', 'LA_BUC_04', 'LA_BUC_05', 'LA_BUC_06'
  ];
  const miBucer = ['M_BUC_01', 'M_BUC_02', 'M_BUC_03a', 'M_BUC_03b'];
  const peBucer = [
    'P_BUC_01', 'P_BUC_02', 'P_BUC_03', 'P_BUC_04', 'P_BUC_05',
    'P_BUC_06', 'P_BUC_07', 'P_BUC_08', 'P_BUC_09', 'P_BUC_10'
  ];
  const reBucer = ['R_BUC_02', 'R_BUC_03'];
  const siBucer = [
    'S_BUC_12',
    'S_BUC_14', 'S_BUC_14a', 'S_BUC_14b',
    'S_BUC_15', 'S_BUC_17', 'S_BUC_24'
  ];
  const ubBucer = ['UB_BUC_01', 'UB_BUC_02', 'UB_BUC_03', 'UB_BUC_04'];
  const alleBucer = [
    ...awBucer, ...fbBucer, ...hzBucer, ...laBucer, ...miBucer, ...peBucer,
    ...reBucer, ...siBucer, ...ubBucer];
  const alleBucerFraSelector = Selectors['alleBucer'];
  it('Sjekker objects keys for navn i alle BUCer', () => {
    expect(Selectors['alleBucer']).to.have.all.keys(alleBucer);
  });

  describe('alleBucer', () => {
    it(`AW ['${awBucer[0]}', ...]`, () => {
      awBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`FB ['${fbBucer[0]}', ...]`, () => {
      fbBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`HZ ['${hzBucer[0]}', ...]`, () => {
      hzBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`LA ['${laBucer[0]}', ...]`, () => {
      laBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`MI ['${miBucer[0]}', ...]`, () => {
      miBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`PE ['${peBucer[0]}', ...]`, () => {
      peBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`RE ['${reBucer[0]}', ...]`, () => {
      reBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`SI ['${siBucer[0]}', ...]`, () => {
      siBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
    it(`UB ['${ubBucer[0]}', ...]`, () => {
      ubBucer.forEach(navn => toHaveOwnProperty('alleBucer', navn));
    });
  });

  describe('alleBuc2Seds', () => {
    it('AW BUCer; AW_BUC_06 a=> [\'DA031\', ...]', () => {
      // console.log(Selectors.alleBuc2Seds);
      awBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('FB Family BUCer', () => {
      fbBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('HZ Horizontal BUCer', () => {
      hzBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('LA Legislation BUCer', () => {
      laBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('MI Miscellaneous BUCer', () => {
      miBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('PE Pensions BUCer', () => {
      peBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('RE Recovery BUCer', () => {
      reBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('SI Sickness BUCer', () => {
      siBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
    it('UB Unemployment BUCer', () => {
      ubBucer.forEach(navn => toHaveOwnProperty('alleBuc2Seds', navn));
    });
  });

  describe('hentBucTyperForFagomrade', () => {
    const sjekkOgHentBucTyper = (fagomrade, bucer) => {
      const buctyper = Selectors.hentBucTyperForFagomrade(fagomrade);
      expect(buctyper).to.be.an('array');
      expect(buctyper).to.have.lengthOf(bucer.length);
      return buctyper;
    };
    it('AW => [\'AW_BUC_06a\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('AW', awBucer);
      expect(bucTyper[0]).to.own.include({
        kode: 'AW_BUC_06a',
        term: 'Søknad om kontantytelser ved arbeidsulykke eller yrkessykdom'
      });
    });
    it('FB => [\'FB_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('FB', fbBucer);
      expect(bucTyper[0]).to.own.include({ kode: 'FB_BUC_01', term: 'Beslutte kompetent myndighet' });
    });
    it('HZ => [\'H_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('HZ', hzBucer);
      expect(bucTyper[0]).to.own.include({ kode: 'H_BUC_01', term: 'Adhoc informasjonsutveksling' });
    });
    it('LA => [\'LA_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('LA', laBucer);
      expect(bucTyper[0]).to.own.include({ kode: 'LA_BUC_01', term: 'Anmodning om unntak' });
    });
    it('MI => [\'M_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('MI', miBucer);
      expect(bucTyper[0]).to.own.include({ kode: 'M_BUC_01', term: 'Krav om gravferdsstønad' });
    });
    it('PE => [\'P_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('PE', peBucer);
      expect(bucTyper[0]).to.own.include({ kode: 'P_BUC_01', term: 'Krav om alderspensjon' });
    });
    it('RE => [\'R_BUC_02\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('RE', reBucer);
      expect(bucTyper[0]).to.own.include({
        kode: 'R_BUC_02',
        term: 'Motregning av for mye utbetalt ved restanser på utbetalingene'
      });
    });
    it('SI => [\'S_BUC_12\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('SI', siBucer);
      expect(bucTyper[0]).to.own.include({
        kode: 'S_BUC_12',
        term: 'Søknad om kontantytelser i forbindelse med arbeidsuførhet'
      });
    });
    it('UB => [\'UB_BUC_01\', ...]', () => {
      const bucTyper = sjekkOgHentBucTyper('UB', ubBucer);
      expect(bucTyper[0]).to.own.include({
        kode: 'UB_BUC_01',
        term: 'Utveksling av informasjon for å avgjøre et krav for UB'
      });
    });
  });

  describe('hentSedTyperForBuc', () => {
    const sjekkOgHentSedTyper = (bucnavn, sedKeysCount = 1) => {
      const sedtyper = Selectors.hentSedTyperForBuc(bucnavn);
      expect(sedtyper).to.be.an('array');
      expect(sedtyper).to.have.lengthOf(sedKeysCount);
      return sedtyper;
    };
    const testeteBucer = [];

    describe('AWOD', () => {
      it('AW_BUC_06a => DA031', () => {
        testeteBucer.push('AW_BUC_06a');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_06a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA031',
          term: 'Søknad om kontantytelser'
        });
      });
      it('AW_BUC_06b => DA040', () => {
        testeteBucer.push('AW_BUC_06b');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_06b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA040',
          term: 'Informasjon om utbetaling eller ikke utbetaling av kontantytelser',
        });
      });
      it('AW_BUC_06c => DA041', () => {
        testeteBucer.push('AW_BUC_06c');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_06c', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA041',
          term: 'Informasjon om opphørt arbeidsuførhet',
        });
      });
      it('AW_BUC_07a => DA042', () => {
        testeteBucer.push('AW_BUC_07a');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_07a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA042',
          term: 'Legeerklæring eller medisinsk rapport'
        });
      });
      it('AW_BUC_07b => DA043', () => {
        testeteBucer.push('AW_BUC_07b');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_07b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA043',
          term: 'Informasjon om person som er oppnevnt til en undersøkelse av en ulykke på vei til eller fra jobb'
        });
      });
      it('AW_BUC_07c => DA044', () => {
        testeteBucer.push('AW_BUC_07c');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_07c', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA044',
          term: 'Anmodning om detaljert utredning sammen med legeerklæringer'
        });
      });
      it('AW_BUC_07d => DA046', () => {
        testeteBucer.push('AW_BUC_07d');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_07d', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA046',
          term: 'Anmodning om vedtak'
        });
      });
      it('AW_BUC_08 => DA048', () => {
        testeteBucer.push('AW_BUC_08');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_08', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA048',
          term: 'Melding om bestridelse av at ulykken eller sykdommen er yrkesrelatert'
        });
      });
      it('AW_BUC_09a => DA050', () => {
        testeteBucer.push('AW_BUC_09a');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_09a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA050',
          term: 'Send erklæring eller melding om yrkessykdom'
        });
      });
      it('AW_BUC_09b => DA051', () => {
        testeteBucer.push('AW_BUC_09b');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_09b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA051',
          term: 'Melding om at vilkår for yrkessykdom ikke er oppfylt samt videresending av erklæring eller melding'
        });
      });
      it('AW_BUC_10a => DA051', () => {
        testeteBucer.push('AW_BUC_10a');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_10a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA052',
          term: 'Yrkessykdom - Varsel om klage'
        });
      });
      it('AW_BUC_10b => DA053', () => {
        testeteBucer.push('AW_BUC_10b');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_10b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA053',
          term: 'Informasjon om en forhåndsbetaling'
        });
      });
      it('AW_BUC_11 => DA053', () => {
        testeteBucer.push('AW_BUC_11');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_11', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA057',
          term: 'Anmodning om informasjon om forverring av yrkessykdom'
        });
      });
      it('AW_BUC_12 => DA059', () => {
        testeteBucer.push('AW_BUC_12');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_12', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA059',
          term: 'Anmodning om informasjon gjeldene graden av tidligere eller etterfølgende arbeidsuførhet'
        });
      });
      it('AW_BUC_13 => DA061', () => {
        testeteBucer.push('AW_BUC_13');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_13', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DA061',
          term: 'Videresend et krav om pensjon eller tilleggsytelser til kompetent institusjon'
        });
      });
      it('AW_BUC_14 => DUMMY', () => {
        testeteBucer.push('AW_BUC_14');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_14', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DUMMY',
          term: 'Dummy data - ukjent første sed',
        });
      });
      it('AW_BUC_15 => DUMMY', () => {
        testeteBucer.push('AW_BUC_15');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_15', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DUMMY',
          term: 'Dummy data - ukjent første sed',
        });
      });
      it('AW_BUC_23 => DUMMY', () => {
        testeteBucer.push('AW_BUC_23');
        const sedTyper = sjekkOgHentSedTyper('AW_BUC_23', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DUMMY',
          term: 'Dummy data - ukjent første sed',
        });
      });
    });

    describe('Familie', () => {
      it('FB_BUC_01 => F001', () => {
        testeteBucer.push('FB_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('FB_BUC_01', 1);
        expect(sedTyper[0]).to.include({
          kode: 'F001',
          term: 'Anmodning om avgjørelse av kompetanse'
        });
      });
      it('FB_BUC_02 => F016', () => {
        testeteBucer.push('FB_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('FB_BUC_02', 1);
        expect(sedTyper[0]).to.include({
          kode: 'F016',
          term: 'Anmodning om overføring av ytelser'
        });
      });
      it('FB_BUC_03 => F021', () => {
        testeteBucer.push('FB_BUC_03');
        const sedTyper = sjekkOgHentSedTyper('FB_BUC_03', 1);
        expect(sedTyper[0]).to.include({
          kode: 'F021',
          term: 'Søknad om tilleggsytelser'
        });
      });
      it('FB_BUC_04 => F003', () => {
        testeteBucer.push('FB_BUC_04');
        const sedTyper = sjekkOgHentSedTyper('FB_BUC_04', 1);
        expect(sedTyper[0]).to.include({
          kode: 'F003',
          term: 'Vedtak om utbetaling vedrørende fortrinnsrett'
        });
      });
    });

    describe('Horizontal', () => {
      it('H_BUC_01 => H001', () => {
        testeteBucer.push('H_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_01', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H001',
          term: 'Melding / anmodning om informasjon'
        });
      });
      it('H_BUC_02a => H005', () => {
        testeteBucer.push('H_BUC_02a');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_02a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H005',
          term: 'Anmodning om informasjon om bosted'
        });
      });
      it('H_BUC_02b => H004', () => {
        testeteBucer.push('H_BUC_02b');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_02b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H004',
          term: 'Svar på fremlegg om bostedsland / uenighet med vedtak om bostedsland'
        });
      });
      it('H_BUC_02c => H003', () => {
        testeteBucer.push('H_BUC_02c');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_02c', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H003',
          term: 'Fremlegg/melding om bostedsland'
        });
      });
      it('H_BUC_03a => H010', () => {
        testeteBucer.push('H_BUC_03a');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_03a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H010',
          term: 'Melding om endring av lovvalg'
        });
      });
      it('H_BUC_03b => H011', () => {
        testeteBucer.push('H_BUC_03b');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_03b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H011',
          term: 'Anmodning om dato for endring av lovvalg'
        });
      });
      it('H_BUC_04 => H020', () => {
        testeteBucer.push('H_BUC_04');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_04', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H020',
          term: 'Krav om - refusjon - administrativ kontroll / medisinsk informasjon'
        });
      });
      it('H_BUC_05 => H061', () => {
        testeteBucer.push('H_BUC_05');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_05', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H061',
          term: 'Melding/anmodning om personnummer'
        });
      });
      it('H_BUC_06 => H065', () => {
        testeteBucer.push('H_BUC_06');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_06', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H065',
          term: 'Overføring av krav/dokument/informasjon'
        });
      });
      it('H_BUC_07 => H070', () => {
        testeteBucer.push('H_BUC_07');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_07', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H070',
          term: 'Melding om dødsfall'
        });
      });
      it('H_BUC_08 => H120', () => {
        testeteBucer.push('H_BUC_08');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_08', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H120',
          term: 'Anmodning om medisinsk informasjon'
        });
      });
      it('H_BUC_09 => H121', () => {
        testeteBucer.push('H_BUC_09');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_09', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H121',
          term: 'Melding om medisinsk informasjon / Svar på forespørsel om medisinsk informasjon'
        });
      });
      it('H_BUC_10 => H130', () => {
        testeteBucer.push('H_BUC_10');
        const sedTyper = sjekkOgHentSedTyper('H_BUC_10', 1);
        expect(sedTyper[0]).to.include({
          kode: 'H130',
          term: 'Anmodning om kostnadsestimat / Anmodning om administrativ kontroll'
        });
      });
    });

    describe('Legislation', () => {
      it('LA_BUC_01 => A001', () => {
        testeteBucer.push('LA_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_01', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A001',
          term: 'Søknad om unntak'
        });
      });
      it('LA_BUC_02 => A003', () => {
        testeteBucer.push('LA_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_02', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A003',
          term: 'Beslutning om lovvalg'
        });
      });
      it('LA_BUC_03 => A008', () => {
        testeteBucer.push('LA_BUC_03');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_03', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A008',
          term: 'Melding om relevant informasjon'
        });
      });
      it('LA_BUC_04 => A009', () => {
        testeteBucer.push('LA_BUC_04');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_04', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A009',
          term: 'Melding om utstasjonering'
        });
      });
      it('LA_BUC_05 => A010', () => {
        testeteBucer.push('LA_BUC_05');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_05', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A010',
          term: 'Melding om lovvalg'
        });
      });
      it('LA_BUC_06 => A005', () => {
        testeteBucer.push('LA_BUC_06');
        const sedTyper = sjekkOgHentSedTyper('LA_BUC_06', 1);
        expect(sedTyper[0]).to.include({
          kode: 'A005',
          term: 'Anmodning om mer informasjon'
        });
      });
    });

    describe('Miscellaneous', () => {
      it('M_BUC_01 => M030', () => {
        testeteBucer.push('M_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('M_BUC_01', 1);
        expect(sedTyper[0]).to.include({
          kode: 'M030',
          term: 'Krav om begravelsesstønad'
        });
      });
      it('M_BUC_02 => M040', () => {
        testeteBucer.push('M_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('M_BUC_02', 1);
        expect(sedTyper[0]).to.include({
          kode: 'M040',
          term: 'Krav om førtidspensjon'
        });
      });
      it('M_BUC_03a => M050', () => {
        testeteBucer.push('M_BUC_03a');
        const sedTyper = sjekkOgHentSedTyper('M_BUC_03a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'M050',
          term: 'Anmodning om informasjon om inntekt - særskilte innskuddsfrie kontantytelser'
        });
      });
      it('M_BUC_03b => M052', () => {
        testeteBucer.push('M_BUC_03b');
        const sedTyper = sjekkOgHentSedTyper('M_BUC_03b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'M052',
          term: 'Anmodning om informasjon om ansettelsesforhold/selvstendig næringsvirksomhet/bosetningsperioder - særskilte innskuddsfrie kontantytelser'
        });
      });
    });
    describe('Pensions', () => {
      it('P_BUC_01 => P2000', () => {
        testeteBucer.push('P_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_01', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P2000',
          term: 'Krav om alderspensjon'
        });
      });
      it('P_BUC_02 => P2100', () => {
        testeteBucer.push('P_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_02', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P2100',
          term: 'Krav om etterlattepensjon'
        });
      });
      it('P_BUC_03 => P2200', () => {
        testeteBucer.push('P_BUC_03');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_03', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P2200',
          term: 'Krav om uførepensjon'
        });
      });
      it('P_BUC_04 => P1000', () => {
        testeteBucer.push('P_BUC_04');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_04', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P1000',
          term: 'Anmodning for perioder med foreldreansvar'
        });
      });
      it('P_BUC_05 => P8000', () => {
        testeteBucer.push('P_BUC_05');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_05', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P8000',
          term: 'Anmodning om tilleggsinformasjon'
        });
      });
      it('P_BUC_06 => P10000, P5000, P6000, P7000', () => {
        testeteBucer.push('P_BUC_06');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_06', 4);
        expect(sedTyper).to.have.deep.members([
          { kode: 'P10000', term: 'Overføring av mer informasjon' },
          { kode: 'P5000', term: 'Forsikrings-/bosettingsperioder' },
          { kode: 'P6000', term: 'Vedtak om pensjon' },
          { kode: 'P7000', term: 'Melding om vedtakssammendrag' }
        ]);
      });
      it('P_BUC_07 => P11000', () => {
        testeteBucer.push('P_BUC_07');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_07', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P11000',
          term: 'Anmodning om pensjonsbeløp'
        });
      });
      it('P_BUC_08 => P12000', () => {
        testeteBucer.push('P_BUC_08');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_08', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P12000',
          term: 'Informasjon om pensjonsbeløp'
        });
      });
      it('P_BUC_09 => P14000', () => {
        testeteBucer.push('P_BUC_09');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_09', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P14000',
          term: 'Endring i personlige forhold'
        });
      });
      it('P_BUC_10 => P15000', () => {
        testeteBucer.push('P_BUC_10');
        const sedTyper = sjekkOgHentSedTyper('P_BUC_10', 1);
        expect(sedTyper[0]).to.include({
          kode: 'P15000',
          term: 'Overføring av pensjonssaker til EESSI'
        });
      });
    });

    describe('Recovery', () => {
      it('R_BUC_02 => R005', () => {
        testeteBucer.push('R_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('R_BUC_02', 1);
        expect(sedTyper[0]).to.include({
          kode: 'R005',
          term: 'Anmodning om motregning i etterbetalinger'
        });
      });
      it('R_BUC_03 => R008', () => {
        testeteBucer.push('R_BUC_03');
        const sedTyper = sjekkOgHentSedTyper('R_BUC_03', 1);
        expect(sedTyper[0]).to.include({
          kode: 'R008',
          term: 'Refusjonskrav for foreløpig utbetalte ytelser'
        });
      });
    });

    describe('Sickness', () => {
      it('S_BUC_12 => S055', () => {
        testeteBucer.push('S_BUC_12');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_12', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S055',
          term: 'Søknad om kontantytelser'
        });
      });
      it('S_BUC_14 => S046', () => {
        testeteBucer.push('S_BUC_14');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_14', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S046',
          term: 'Informasjon om utbetaling eller ikke utbetaling av kontantytelser'
        });
      });
      it('S_BUC_14a => S047', () => {
        testeteBucer.push('S_BUC_14a');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_14a', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S047',
          term: 'Informasjon om kontantytelser som følge av arbeidsuførhet eller annen vesentlig informasjon, gitt av kompetent institusjon'
        });
      });
      it('S_BUC_14b => S048', () => {
        testeteBucer.push('S_BUC_14b');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_14b', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S048',
          term: 'Informasjon om avsluttet arbeidsuførhet eller annen vesentlig informasjon, gitt av institusjon på bosted eller oppholdssted'
        });
      });
      it('S_BUC_15 => S056', () => {
        testeteBucer.push('S_BUC_15');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_15', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S056',
          term: 'Melding om søknad om kontantytelser - langtidspleie'
        });
      });
      it('S_BUC_17 => S001', () => {
        testeteBucer.push('S_BUC_17');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_17', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S001',
          term: 'Informasjon om utbetaling av kontantytelser - langtidspleie'
        });
      });
      it('S_BUC_24 => S040', () => {
        testeteBucer.push('S_BUC_24');
        const sedTyper = sjekkOgHentSedTyper('S_BUC_24', 1);
        expect(sedTyper[0]).to.include({
          kode: 'S040',
          term: 'Forespørsel om perioder - trygdeytelse: sykdom, svangerskap og fødsel'
        });
      });
    });

    describe('Unemplyment', () => {
      it('UB_BUC_01 => U001, U001CB, U003, U005', () => {
        testeteBucer.push('UB_BUC_01');
        const sedTyper = sjekkOgHentSedTyper('UB_BUC_01', 4);
        expect(sedTyper).to.have.deep.members([
          { kode: 'U001', term: 'Anmodning om trygdehistorikk' },
          { kode: 'U001CB', term: 'Anmodning om trygdehistorikk - grensearbeider' },
          { kode: 'U003', term: 'Anmodning om lønnsopplysninger' },
          { kode: 'U005', term: 'Anmodning om familieopplysninger' }
        ]);
      });
      it('UB_BUC_02 => U007, U009', () => {
        testeteBucer.push('UB_BUC_02');
        const sedTyper = sjekkOgHentSedTyper('UB_BUC_02', 2);
        expect(sedTyper).to.have.deep.members([
          { kode: 'U007', term: 'Forespørsel om eksportdokument' },
          { kode: 'U009', term: 'Registrering av melding - eksport' }
        ]);
      });
      it('UB_BUC_03 => U018', () => {
        testeteBucer.push('UB_BUC_03');
        const sedTyper = sjekkOgHentSedTyper('UB_BUC_03', 1);
        expect(sedTyper[0]).to.include({
          kode: 'U018',
          term: 'Forespørsel om registreringsinformasjon - grensearbeider'
        });
      });
      it('UB_BUC_04 => U020_Master', () => {
        testeteBucer.push('UB_BUC_04');
        const sedTyper = sjekkOgHentSedTyper('UB_BUC_04', 1);
        expect(sedTyper[0]).to.include({
          kode: 'U020_Master',
          term: 'U020_Master'
        });
      });
      it('UB_BUC_05 => DUMMY', () => {
        testeteBucer.push('UB_BUC_05');
        const sedTyper = sjekkOgHentSedTyper('UB_BUC_05', 1);
        expect(sedTyper[0]).to.include({
          kode: 'DUMMY',
          term: 'Dummy data - ukjent første sed'
        });
      });
    });

    describe('Selector coverage ', () => {
      it('No missing sed selsector tests', () => {
        const bucUtenTest = Object.keys(alleBucerFraSelector).filter(buc => !testeteBucer.includes(buc));
        expect(bucUtenTest, `${bucUtenTest} mangler tester`).to.have.length(0);
      });
    });
  });
});
