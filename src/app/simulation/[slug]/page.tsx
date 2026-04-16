'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

// ─────────────────────────────────────────────
//  MOCK DATA ENGINE
// ─────────────────────────────────────────────
const simulationsData: Record<string, SimulationData> = {
  'kapital-bank-credit-analyst': {
    slug: 'kapital-bank-credit-analyst',
    company: 'Kapital Bank',
    companyShort: 'KB',
    role: 'Kiçik Kredit Analitiki',
    category: 'Bank işi',
    logoColor: '#1C6AC3',
    tableData: {
      headers: ['İl', 'Gəlir (AZN)', 'Xərclər (AZN)', 'Mənfəət (AZN)'],
      rows: [
        ['2021', '82,000', '61,000', '21,000'],
        ['2022', '95,000', '72,000', '23,000'],
        ['2023', '110,000', '84,000', '26,000'],
      ],
    },
    prompt: `Siz Kapital Bankın kredit şöbəsində kiçik analitiksiniz. Nəsimi rayonunda yerləşən "Nəsimi Çörək" mağazasının sahibi Rəşad Məmmədov 50,000 AZN məbləğində biznes krediti üçün müraciət edib. Müştərinin 3 illik maliyyə göstəriciləri cədvəldə verilmişdir.

Nəsimi rayonunda icarə qiymətləri son 1 ildə 23% artmışdır. ƏDV dərəcəsi 18%-dir.

200 sözdən ibarət memo yazaraq krediti təsdiq və ya rədd edin.`,
    memoInstruction: 'Müdirə ünvanlanan 150-250 sözdən ibarət memo yazın. Kredit qərarınızı maliyyə göstəriciləri, ƏDV, icarə dinamikası və risk təhlili ilə əsaslandırın.',
    passport: {
      userName: 'Hüseyn Məmmədov',
      university: 'AZMİU',
      date: '2026-04-17',
      scores: {
        'Analitik Ciddilik': 7,
        'Yerli Kontekst': 4,
        'Kommunikasiya': 8,
        'Risk Müəyyənləşdirmə': 5,
      },
      totalScore: 6,
      strengths: [
        'Maliyyə göstəricilərini düzgün təhlil etmisiniz',
        'Memo strukturu peşəkar və aydındır',
        'Kredit qaytarma qabiliyyətini qiymətləndirmisiniz',
      ],
      gaps: [
        '⚠️ ƏDV-ni (18%) gəlir hesablamalarına tətbiq etməmisiniz — Azərbaycan banklarında junior analitiklər bunu mütləq nəzərə almalıdır',
        '⚠️ Nəsimi rayonunda icarə qiymətlərinin 23% artmasını xərc proqnozlarında əks etdirməmisiniz',
        '⚠️ Əməliyyat riski təhlili yoxdur',
      ],
      advice: 'Növbəti dəfə ƏDV hesablamalarını və rayon bazarının dinamikasını ayrıca təqdim edin.',
      careerAdvice: 'Analitik bacarıqlarınız güclüdür, lakin yerli vergi qanunvericiliyini dərindən öyrənmək karyeranıza əhəmiyyətli töhfə verəcək. Kapital Bank və ABB-nin kredit şöbələrindəki vakansiyalar üçün müraciət etmək tövsiyə olunur.',
      nextSkill: 'IFRS əsasları və Azərbaycan vergi qanunvericiliyi',
    },
  },

  'socar-procurement': {
    slug: 'socar-procurement',
    company: 'SOCAR',
    companyShort: 'SC',
    role: 'Təchizat üzrə Mütəxəssis',
    category: 'Energetika',
    logoColor: '#16a34a',
    tableData: {
      headers: ['Təchizatçı', 'Qiymət (USD)', 'Çatdırılma müddəti', 'ISO Sertifikatı'],
      rows: [
        ['AzərTexnik MMC', '142,500', '45 gün', 'ISO 9001 ✓'],
        ['Petro Supply Ltd', '128,000', '60 gün', 'ISO 9001 ✓'],
        ['Caspian Industrial', '155,000', '30 gün', 'ISO 9001/14001 ✓'],
      ],
    },
    prompt: `Siz SOCAR-ın Xəzər dənizi platformaları üçün Material Management şöbəsindəsiniz. Platforma #7 üçün 500 ədəd yüksək təzyiqli klapan (DN50, PN40) almaq lazımdır. Üç potensial təchizatçı təklif göndərib.

SOCAR-ın satınalma qaydalarına görə, 100,000 USD-dən yuxarı alışlar üçün mütləq 3 müqayisəli təklif tələb olunur, həmçinin HSE (Health, Safety & Environment) sertifikatına malik olmayan təchizatçılar avtomatik olaraq rədd edilir. Dövlət şirkəti kimi SOCAR yerli istehsalçılara üstünlük verir (eyni keyfiyyətdə olduqda).

Tender komitəsinə 200 sözdən ibarət hesabat yazın: hansı təchizatçını seçirsiniz və niyə?`,
    memoInstruction: 'Tender komitəsinə ünvanlanan 150-250 sözdən ibarət hesabat yazın. Qiymət, çatdırılma, sertifikat və SOCAR satınalma qaydalarını əsaslandırın.',
    passport: {
      userName: 'Hüseyn Məmmədov',
      university: 'AZMİU',
      date: '2026-04-17',
      scores: {
        'Tender Analizi': 8,
        'SOCAR Qaydalarına Uyğunluq': 7,
        'Kommersiya Məntiq': 6,
        'HSE Farkındalığı': 5,
      },
      totalScore: 7,
      strengths: [
        'Üç təchizatçı arasındakı əsas fərqləri dəqiq müəyyən etmisiniz',
        'SOCAR satınalma prosedurlarına istinad etmisiniz',
        'Çatdırılma müddəti ilə qiymət arasındakı balansı qiymətləndirmisiniz',
      ],
      gaps: [
        '⚠️ AzərTexnik MMC-nin yerli istehsalçı olduğunu vurğulamamışsınız — SOCAR-da bu məqam tender qərarında kritik rol oynayır',
        '⚠️ ISO 14001 (Ətraf Mühit) sertifikatının SOCAR-ın Xəzər platformaları üçün xüsusi əhəmiyyətini qeyd etməmisiniz',
        '⚠️ Ödəniş şərtlərini (L/C vs avans) müzakirə etməmisiniz',
      ],
      advice: 'SOCAR tender hesabatlarında həmişə yerli məzmun (local content) faizini, HSE reytinqini və ödəniş strukturunu ayrıca bölmədə qeyd edin.',
      careerAdvice: 'Tender analizi bacarıqlarınız yaxşıdır. SOCAR, bp Azerbaijan və Petrofac kimi şirkətlər üçün SCM/Procurement mütəxəssisi vəzifələrinə müraciət etmək tövsiyə olunur.',
      nextSkill: 'Beynəlxalq ticarət qaydaları (Incoterms 2020) və SOCAR satınalma siyasəti',
    },
  },

  'azercell-product-manager': {
    slug: 'azercell-product-manager',
    company: 'Azercell',
    companyShort: 'AZ',
    role: 'Rəqəmsal Məhsul Meneceri',
    category: 'Texnologiya',
    logoColor: '#9333ea',
    tableData: {
      headers: ['Metrika', 'Q1 2024', 'Q2 2024', 'Q3 2024'],
      rows: [
        ['MAU (min. istifadəçi)', '2.1M', '2.4M', '2.2M'],
        ['ARPU (AZN)', '14.2', '13.8', '12.9'],
        ['Ortalama Seans Müddəti', '4m 12s', '5m 03s', '4m 44s'],
        ['Tətbiq Mağazası Reytinqi', '3.8★', '4.1★', '3.9★'],
      ],
    },
    prompt: `Siz Azercell-in Rəqəmsal Məhsullar şöbəsindəsiniz. "MyAzercell" mobil tətbiqinin Q3 2024 məlumatlarını analiz etməlisiniz. Tətbiqin MAU-su Q2-yə nisbətən 8.3% azalıb, ARPU isə son 3 rübdə ardıcıl olaraq aşağı düşür.

Rəqabət mənzərəsi: Bakcell "SuperApp" konsepsiyası ilə bazara giriş edib; Nar Mobile isə 5G pilotunu elan edib. Azərbaycan-da mobil internet istifadəçilərinin 67%-i Android istifadəçisidir, iOS payı 33%-dir.

Məhsul direktoruna 200 sözdən ibarət PRD (Məhsul Tələbləri Sənədi) formatında müxtəsər yazın: nə etməlisiniz, niyə və hansı prioritetlə?`,
    memoInstruction: 'Məhsul direktoruna ünvanlanan 150-250 sözdən ibarət müxtəsər yazın. Rəqabət, metrika trendi və konkret tövsiyələri əhatə edin.',
    passport: {
      userName: 'Hüseyn Məmmədov',
      university: 'AZMİU',
      date: '2026-04-17',
      scores: {
        'Məlumat Şərhi': 7,
        'Rəqabət Analizi': 6,
        'Prioritetləşdirmə': 5,
        'Texniki Farkındalıq': 8,
      },
      totalScore: 7,
      strengths: [
        'MAU azalmasının əsas səbəblərini düzgün müəyyən etmisiniz',
        'Android/iOS paylanmasını strategiyaya tətbiq etmisiniz',
        'SuperApp trendinə cavab olaraq konkret xüsusiyyət tövsiyəsi vermişsiniz',
      ],
      gaps: [
        '⚠️ ARPU azalmasını churn analizi ilə əlaqələndirməmisiniz — bu Azercell-in ən vacib biznes riskidir',
        '⚠️ 5G pilot elanının məhsula təsirini qiymətləndirməmisiniz',
        '⚠️ Tövsiyələr üçün uğur meyarları (KPI) göstərməmisiniz',
      ],
      advice: 'PRD-lərdə həmişə "uğur bu kimi görünür" bölməsi əlavə edin: hansı metrika hansı həddi keçsə, tövsiyəniz uğurlu sayılır.',
      careerAdvice: 'Texniki anlayış və məlumat oxuma bacarığınız güclüdür. Azercell, Bakcell və PAŞA Technology şirkətlərindəki Product/Growth rolları sizə uyğundur.',
      nextSkill: 'Mobil tətbiq metriklərinin optimallaşdırılması (ASO, Retention Loops) və OKR metodologiyası',
    },
  },

  'pasha-bank-risk': {
    slug: 'pasha-bank-risk',
    company: 'PASHA Bank',
    companyShort: 'PB',
    role: 'Risklərin İdarə Edilməsi',
    category: 'Bank işi',
    logoColor: '#dc2626',
    tableData: {
      headers: ['Risk Növü', 'Cari Ekspozisiya', 'Limit', 'Vəziyyət'],
      rows: [
        ['Kredit riski', '18.4M AZN', '20M AZN', '🟡 Diqqət'],
        ['Likvidlik riski (LCR)', '112%', '100% min', '🟢 Normal'],
        ['Valyuta riski (USD)', '8.2M AZN', '10M AZN', '🟡 Diqqət'],
        ['Əməliyyat riski', 'Yüksək', 'Orta', '🔴 Kritik'],
      ],
    },
    prompt: `Siz PASHA Bank-ın Risk İdarəetmə şöbəsindəsiniz. Gündəlik risk hesabatını nəzərdən keçirirsiniz. Bu həftə bankın korporativ müştərisi olan "Azərİnşaat" SC-nin 5M AZN kredit limiti vaxtında ödənilməyib — şirkət 15 günlük texniki gecikməni bildirdi.

Məlum olmayan amillər: "Azərİnşaat"-ın əsas müştərisi olan dövlət qurumu son 2 ayda ödənişlərini gecikdirib. Azərbaycan Mərkəzi Bankının (AMB) son direktivi ilə NPL (qeyri-işlək kreditlər) nisbəti 5%-dən yuxarı olan banklar əlavə ehtiyat ayırmalıdır.

Risk komitəsinə 200 sözdən ibarət qısa hesabat yazın: Bu kredit mövqeyini necə təsnifat etmək lazımdır və bank hansı addımları atmalıdır?`,
    memoInstruction: 'Risk komitəsinə ünvanlanan 150-250 sözdən ibarət hesabat yazın. AMB direktivi, NPL qaydaları və tövsiyə olunan addımları əhatə edin.',
    passport: {
      userName: 'Hüseyn Məmmədov',
      university: 'AZMİU',
      date: '2026-04-17',
      scores: {
        'Risk Təsnifatı': 6,
        'AMB Qaydaları': 5,
        'İtirilmə proqnozu': 7,
        'Kommunikasiya Aydınlığı': 8,
      },
      totalScore: 7,
      strengths: [
        'Kredit gecikməsinin səbəbini sistematik şəkildə araşdırmışsınız',
        'Dövlət ödənişlərinin korporativ portfelə yayılma riskini qeyd etmisiniz',
        'Hesabat dili peşəkar və aydındır',
      ],
      gaps: [
        '⚠️ AMB-nin NPL direktivi ilə əlaqədar ehtiyat ayırma məbləğini hesablamamışsınız',
        '⚠️ "Watch List" və "Substandard" kateqoriyaları arasındakı fərqi aydınlaşdırmamışsınız',
        '⚠️ Girov qiymətləndirməsi və onun likvid dəyərini nəzərə almamışsınız',
      ],
      advice: 'Risk hesabatlarında həmişə "əgər... olarsa" ssenarisi əlavə edin: kreditin tam itirildiyini fərz etsək, bankın kapital adekvatlıq nisbəti necə dəyişər?',
      careerAdvice: 'Kommunikasiya bacarığınız güclüdür. PASHA Bank, ABB və Rabitəbank-ın kredit riski şöbələrindəki vəzifələr üçün uyğunsunuz.',
      nextSkill: 'Basel III kapital çərçivəsi və Azərbaycan Mərkəzi Bankı normativləri',
    },
  },
};

// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────
interface TableData {
  headers: string[];
  rows: string[][];
}

interface PassportData {
  userName: string;
  university: string;
  date: string;
  scores: Record<string, number>;
  totalScore: number;
  strengths: string[];
  gaps: string[];
  advice: string;
  careerAdvice: string;
  nextSkill: string;
}

interface SimulationData {
  slug: string;
  company: string;
  companyShort: string;
  role: string;
  category: string;
  logoColor: string;
  tableData: TableData;
  prompt: string;
  memoInstruction: string;
  passport: PassportData;
}

type View = 'task' | 'loading' | 'passport';

// ─────────────────────────────────────────────
//  TIMER HOOK
// ─────────────────────────────────────────────
function useTimer(totalSeconds: number, running: boolean) {
  const [remaining, setRemaining] = useState(totalSeconds);
  useEffect(() => {
    if (!running) return;
    if (remaining <= 0) return;
    const id = setInterval(() => setRemaining((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [running, remaining]);
  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const progress = ((totalSeconds - remaining) / totalSeconds) * 100;
  return { mm, ss, progress, remaining };
}

// ─────────────────────────────────────────────
//  CIRCULAR PROGRESS
// ─────────────────────────────────────────────
function CircularProgress({ progress, mm, ss }: { progress: number; mm: string; ss: string }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} stroke="#111A2E" strokeWidth="4" fill="none" />
        <circle
          cx="28" cy="28" r={r}
          stroke="#22c55e" strokeWidth="4" fill="none"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <span className="text-white text-xs font-bold z-10">{mm}:{ss}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
//  SCORE BAR
// ─────────────────────────────────────────────
function ScoreBar({ label, score }: { label: string; score: number }) {
  const isHigh = score > 6;
  const barColor = isHigh ? 'bg-[#22c55e]' : score >= 5 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-gray-300 text-sm w-44 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className={`${barColor} h-full rounded-full transition-all duration-700`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className={`text-sm font-bold w-10 text-right ${isHigh ? 'text-[#22c55e]' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}>
        {score}/10
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
//  QR CODE MOCK
// ─────────────────────────────────────────────
function MockQR() {
  return (
    <div className="w-16 h-16 bg-white rounded p-1 flex-shrink-0">
      <svg viewBox="0 0 21 21" className="w-full h-full">
        {/* Simple mock QR pattern */}
        <rect x="0" y="0" width="7" height="7" fill="black" />
        <rect x="1" y="1" width="5" height="5" fill="white" />
        <rect x="2" y="2" width="3" height="3" fill="black" />
        <rect x="14" y="0" width="7" height="7" fill="black" />
        <rect x="15" y="1" width="5" height="5" fill="white" />
        <rect x="16" y="2" width="3" height="3" fill="black" />
        <rect x="0" y="14" width="7" height="7" fill="black" />
        <rect x="1" y="15" width="5" height="5" fill="white" />
        <rect x="2" y="16" width="3" height="3" fill="black" />
        <rect x="9" y="0" width="2" height="2" fill="black" />
        <rect x="12" y="0" width="2" height="2" fill="black" />
        <rect x="9" y="3" width="3" height="2" fill="black" />
        <rect x="9" y="7" width="2" height="4" fill="black" />
        <rect x="12" y="8" width="3" height="2" fill="black" />
        <rect x="0" y="9" width="4" height="2" fill="black" />
        <rect x="5" y="9" width="2" height="3" fill="black" />
        <rect x="9" y="12" width="4" height="3" fill="black" />
        <rect x="14" y="9" width="3" height="2" fill="black" />
        <rect x="18" y="9" width="3" height="3" fill="black" />
        <rect x="14" y="12" width="2" height="5" fill="black" />
        <rect x="17" y="14" width="4" height="2" fill="black" />
        <rect x="17" y="17" width="4" height="4" fill="black" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────
//  VIEW 1: TASK VIEW
// ─────────────────────────────────────────────
function TaskView({ sim, onSubmit }: { sim: SimulationData; onSubmit: () => void }) {
  const [memo, setMemo] = useState('');
  const { mm, ss, progress, remaining } = useTimer(600, true);
  const wordCount = memo.trim() === '' ? 0 : memo.trim().split(/\s+/).length;
  const isLow = remaining <= 120;

  return (
    <div className="min-h-screen bg-[#0B1221] flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0B1221]/95 backdrop-blur border-b border-slate-800 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
            <span className="text-white font-bold text-xl tracking-tight">Sınaq</span>
          </div>
          <span className="text-gray-300 text-sm font-medium hidden sm:block">
            {sim.company} <span className="text-slate-500">·</span> {sim.role}
          </span>
          <span className="bg-blue-600/20 text-[#3b82f6] border border-blue-800 text-xs font-bold px-3 py-1 rounded-full tracking-wide">
            Simulyasiya
          </span>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10 pb-32">
        {/* Scenario text */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: sim.logoColor }}
            >
              {sim.companyShort}
            </div>
            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{sim.category}</p>
              <h1 className="text-white font-bold text-lg leading-tight">{sim.role}</h1>
            </div>
          </div>

          {sim.prompt.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Table */}
        <div className="mb-8 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#111A2E]">
                {sim.tableData.headers.map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-gray-400 font-semibold border-b border-slate-800">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sim.tableData.rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-800/50 transition-colors hover:bg-slate-800/30 ${i % 2 === 0 ? 'bg-[#111A2E]' : 'bg-[#0B1221]'}`}
                >
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? 'text-white font-medium' : 'text-gray-300'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Memo Instruction */}
        <p className="text-blue-300 italic text-sm mb-4">{sim.memoInstruction}</p>

        {/* Textarea */}
        <div className="relative">
          <textarea
            id="memo-textarea"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="Memo-nu buraya yazın..."
            className="bg-[#111A2E] border border-slate-800 focus:border-[#22c55e] focus:outline-none rounded-lg w-full h-48 p-4 text-white placeholder-slate-500 text-sm resize-none transition-colors"
          />
          <div className="absolute bottom-3 right-3 text-slate-500 text-xs">
            {wordCount} söz
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B1221] border-t border-slate-800 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Issues button */}
          <button
            id="issues-btn"
            className="flex items-center gap-2 text-red-400 border border-red-500/20 bg-red-500/10 px-3 py-2 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            1 Məsələ
          </button>

          {/* Center: Timer */}
          <div className="flex items-center gap-3">
            <CircularProgress progress={progress} mm={mm} ss={ss} />
            <span className={`text-xs font-medium ${isLow ? 'text-red-400' : 'text-[#22c55e]'}`}>
              {isLow ? 'Vaxt az qalır!' : 'daq'}
            </span>
          </div>

          {/* Right: Submit */}
          <button
            id="submit-btn"
            onClick={onSubmit}
            className="bg-[#22c55e] hover:bg-[#22c55e]/80 text-white font-bold py-2 px-5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Göndər və Qiymətləndir →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  VIEW 2: LOADING VIEW
// ─────────────────────────────────────────────
function LoadingView() {
  const [dots, setDots] = useState('.');
  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? '.' : d + '.')), 500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen bg-[#0B1221] flex flex-col items-center justify-center">
      {/* Spinner */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#22c55e]"
          style={{ animation: 'spin 1s linear infinite' }}
        />
        <div className="absolute inset-3 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>

      <p className="text-[#22c55e] font-bold text-lg tracking-wide mb-2">
        Cavabınız qiymətləndirilir...
      </p>

      <p className="text-slate-500 text-sm">
        AI analiz edir{dots}
      </p>

      <div className="mt-10 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#22c55e]/40"
            style={{ animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
//  VIEW 3: PASSPORT VIEW
// ─────────────────────────────────────────────
function PassportView({ sim, onReset }: { sim: SimulationData; onReset: () => void }) {
  const p = sim.passport;
  const score = p.totalScore;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 10) * circumference;

  return (
    <div className="min-h-screen bg-[#0B1221] py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-6 h-6 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
          <span className="text-white font-bold text-2xl">Sınaq</span>
          <span className="text-white font-bold text-2xl ml-1">Bacarıq Pasportu</span>
        </div>
        <p className="text-slate-500 text-sm mt-1">Süni intellekt tərəfindən qiymətləndirilmişdir</p>
      </div>

      {/* Main Card */}
      <div className="max-w-2xl mx-auto bg-[#111A2E] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">

        {/* Top Row */}
        <div className="flex items-start justify-between mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: sim.logoColor }}
            >
              {sim.companyShort}
            </div>
            <div>
              <p className="text-white font-bold text-base">{sim.company}</p>
              <p className="text-gray-400 text-sm">{sim.role}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-500 text-xs">Tarix</p>
            <p className="text-gray-300 text-sm font-medium">{p.date}</p>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-8">
          <p className="text-white font-bold text-2xl">{p.userName}</p>
          <p className="text-gray-400 text-sm">{p.university}</p>
        </div>

        {/* Progress Bars */}
        <div className="mb-8">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Qiymətləndirmə</h3>
          <div className="space-y-1">
            {Object.entries(p.scores).map(([label, score]) => (
              <ScoreBar key={label} label={label} score={score} />
            ))}
          </div>
        </div>

        {/* Total Score */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#0B1221" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="40" fill="none"
                stroke="#22c55e" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-white font-bold text-4xl">{score}</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Ümumi bal</p>
        </div>

        {/* Strengths */}
        <div className="mb-2">
          <h3 className="text-[#22c55e] text-sm font-bold mb-3 uppercase tracking-wider">✦ Güclü tərəflər</h3>
          <ul className="space-y-2">
            {p.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Gaps */}
        <div className="mt-6">
          <h3 className="text-red-400 text-sm font-bold mb-3 uppercase tracking-wider">⚠ İnkişaf sahələri</h3>
          <ul className="space-y-3">
            {p.gaps.map((g, i) => (
              <li key={i} className="text-gray-300 text-sm leading-relaxed bg-red-950/20 border border-red-900/30 rounded-lg px-3 py-2">
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Advice Box */}
        <div className="bg-[#111A2E] border border-slate-700 rounded-lg p-4 mt-6">
          <p className="text-[#22c55e] text-xs font-bold uppercase tracking-wider mb-2">💡 Tövsiyə</p>
          <p className="text-gray-300 text-sm italic leading-relaxed">{p.advice}</p>
        </div>

        {/* Career Fit */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <h3 className="text-white font-bold mb-2">Karyera uyğunluğu</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">{p.careerAdvice}</p>
          <a href="#" className="text-[#3b82f6] text-sm font-medium hover:text-[#3b82f6]/80 transition-colors">
            Növbəti bacarıq: {p.nextSkill} →
          </a>
        </div>

        {/* Footer Action Area */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex gap-6 items-center">
          <div className="flex flex-col items-center gap-1">
            <MockQR />
            <p className="text-slate-500 text-xs text-center">Doğrulama kodu</p>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <button
              id="pdf-download-btn"
              className="bg-transparent border border-slate-600 text-white rounded-lg py-2 w-full hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              ↓ PDF Yüklə
            </button>
            <button
              id="bossaz-btn"
              className="bg-[#22c55e] hover:bg-[#1ea34d] text-white font-bold rounded-lg py-2 w-full shadow-lg transition-colors text-sm"
            >
              ⇱ Boss.az-a əlavə et
            </button>
          </div>
        </div>
      </div>

      {/* Bottom link */}
      <div className="text-center mt-8">
        <button
          id="retry-btn"
          onClick={onReset}
          className="text-slate-400 hover:text-[#22c55e] transition-colors text-sm font-medium"
        >
          ← Yenidən cəhd et
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  ROOT PAGE
// ─────────────────────────────────────────────
export default function SimulationPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const sim = simulationsData[slug ?? ''];

  const [view, setView] = useState<View>('task');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = () => {
    setView('loading');
    timerRef.current = setTimeout(() => setView('passport'), 3000);
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setView('task');
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  if (!sim) {
    return (
      <div className="min-h-screen bg-[#0B1221] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#22c55e] text-2xl font-bold mb-2">404</p>
          <p className="text-white text-lg font-bold mb-2">Simulyasiya tapılmadı</p>
          <p className="text-gray-400 text-sm">Slug: <code className="text-slate-300">{slug}</code></p>
        </div>
      </div>
    );
  }

  return (
    <>
      {view === 'task' && <TaskView sim={sim} onSubmit={handleSubmit} />}
      {view === 'loading' && <LoadingView />}
      {view === 'passport' && <PassportView sim={sim} onReset={handleReset} />}
    </>
  );
}
