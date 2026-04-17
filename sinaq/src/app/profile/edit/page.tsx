"use client";
import { useState } from "react";
import Link from "next/link";
import UserDropdown from "@/components/UserDropdown";
import { Input } from "@/components/ui/input";

export default function EditProfilePage() {
  const [activeTab, setActiveTab] = useState("Profile");

  // Expanded and reorganized tabs
  const tabs = [
    { id: "Profile", label: "Profile Setup" },
    { id: "CV & Background", label: "CV & Background" },
    { id: "Education", label: "Education" },
    { id: "Career Requirements", label: "Career Preferences" },
    { id: "History", label: "Job Simulations History" },
  ];

  return (
    <div className="min-h-screen bg-[#030812] font-sans flex flex-col">
      {/* Dashboard-style Navbar */}
      <header className="bg-[#0B1221] border-b border-slate-800 sticky top-0 z-10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c9 0 10-8 10-8l-.5-.5A5.49 5.49 0 0 1 17 8z"/>
              </svg>
              <span className="text-xl font-bold text-white">Sınaq</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 ml-4">
              <Link href="/dashboard" className="text-[14px] font-medium text-gray-400 hover:text-white h-16 flex items-center transition-colors">
                Deşbord
              </Link>
              <Link href="/simulations" className="text-[14px] font-medium text-gray-400 hover:text-white h-16 flex items-center transition-colors">
                Simulyasiyalar
              </Link>
              <Link href="/jobs" className="text-[14px] font-medium text-gray-400 hover:text-white h-16 flex items-center transition-colors">
                İşlər
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
             <UserDropdown />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-10 max-w-[1200px]">
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-8">
           <div>
             <h1 className="text-[32px] font-bold text-white mb-2">ProfiliȂ Qur</h1>
             <p className="text-gray-400 text-[15px]">Işəgötürənlərə sizin haqqınızda lazım olan hamsını ver.</p>
           </div>
           <button className="bg-[#22c55e] text-white px-6 py-2.5 rounded-md font-bold hover:bg-[#16a34a] shadow-sm transition-all focus:ring-4 focus:ring-green-900">
              İctimai Profili Görüntülə
           </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 pb-20">
          
          {/* Left Navigation Tabs (Vertical for better scaling) */}
          <div className="w-full lg:w-[260px] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-5 py-3.5 rounded-lg text-[14px] font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-[#081121] text-[#22c55e] shadow-sm border border-[#1e293b]' 
                    : 'bg-transparent text-gray-400 hover:bg-[#10213d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Form Panel */}
          <div className="flex-1">
            
            {/* 1. Profile Setup Tab */}
            {activeTab === "Profile" && (
              <div className="bg-[#081121] rounded-xl border border-[#1e293b] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-[#1e293b] bg-[#10213d]/50">
                  <h2 className="text-2xl font-bold text-white mb-2">Basic Profile Setup</h2>
                  <p className="text-gray-400 text-sm">Employers use this information to contact you and evaluate your personal brand.</p>
                </div>
                
                <div className="p-8">
                  {/* Photo Section */}
                  <div className="flex items-center gap-6 mb-10 pb-10 border-b border-gray-100">
                    <div className="w-24 h-24 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center font-bold text-3xl text-[#1C6AC3] shrink-0">
                      RY
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Profile Photo</h3>
                      <p className="text-[13px] text-gray-500 mb-4 max-w-sm leading-relaxed">
                        A professional headshot increases your chances of getting responses from recruiters by up to 3x.
                      </p>
                      <div className="flex gap-3">
                        <button className="bg-white text-[#1C6AC3] font-medium text-[13px] px-5 py-2 rounded-md border border-[#1C6AC3] hover:bg-blue-50 transition-colors shadow-sm">
                          Upload Photo
                        </button>
                        <button className="text-gray-400 hover:text-red-500 font-medium text-[13px] px-4 py-2 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                      <Input placeholder="Enter your first name" defaultValue="Sycelin" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3]" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                      <Input placeholder="Enter your last name" defaultValue="Ross" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3]" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <Input placeholder="name@example.com" type="email" defaultValue="syscelin@gmail.com" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3] bg-gray-50" readOnly />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">Phone Number</label>
                      <Input placeholder="+1 (555) 000-0000" type="tel" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">LinkedIn URL</label>
                      <Input placeholder="https://linkedin.com/in/yourprofile" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3]" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">Personal Portfolio / GitHub</label>
                      <Input placeholder="https://github.com/yourusername" className="h-11 shadow-sm border-gray-300 focus-visible:ring-[#1C6AC3]" />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100">
                    <button className="bg-[#1C6AC3] text-white font-bold text-[14px] px-8 py-3 rounded-md hover:bg-[#144C8B] shadow-sm transition-all focus:ring-4 focus:ring-blue-100">
                      Save Profile Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. CV & Background Tab */}
            {activeTab === "CV & Background" && (
              <div className="bg-[#111A2E] rounded-xl border border-slate-700 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-700 bg-[#0d172e]/50">
                  <h2 className="text-2xl font-bold text-white mb-2">CV & Background Info</h2>
                  <p className="text-gray-400 text-sm">Upload your resume and tag your core skills to match instantly with ATS systems.</p>
                </div>
                
                <div className="p-8">
                  {/* CV Upload */}
                  <div className="mb-10">
                    <label className="block text-[15px] font-bold text-gray-800 mb-4">Resume / CV Upload</label>
                    <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-100 hover:border-[#1C6AC3] transition-all cursor-pointer">
                       <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                       </svg>
                       <h3 className="text-[16px] font-bold text-gray-800 mb-1">Click to upload or drag and drop</h3>
                       <p className="text-sm text-gray-500 mb-4">PDF, DOCX up to 10MB</p>
                       <button className="bg-white text-gray-700 font-medium text-[13px] px-6 py-2 rounded-md border border-gray-300 shadow-sm pointer-events-none">
                          Browse Files
                       </button>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-10">
                    <label className="block text-[15px] font-bold text-gray-800 mb-2">Verified Skills</label>
                    <p className="text-sm text-gray-500 mb-4">These are skills you've earned from completing Job Simulations or manually added.</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-50 text-[#1C6AC3] px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100 flex items-center gap-2">
                        Data Analysis <button className="hover:text-blue-800">&times;</button>
                      </span>
                      <span className="bg-blue-50 text-[#1C6AC3] px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100 flex items-center gap-2">
                        Financial Modeling <button className="hover:text-blue-800">&times;</button>
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 flex items-center gap-2">
                        Python <button className="hover:text-gray-900">&times;</button>
                      </span>
                    </div>

                    <div className="flex gap-2">
                       <Input placeholder="Type a new skill (e.g. JavaScript, Marketing)" className="h-11 shadow-sm border-gray-300 max-w-sm" />
                       <button className="bg-gray-800 text-white font-medium text-[14px] px-6 py-2 rounded-md hover:bg-gray-900 transition-colors">
                          Add Skill
                       </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-8">
                    <label className="block text-[15px] font-bold text-gray-800 mb-2">Professional Summary</label>
                    <p className="text-sm text-gray-500 mb-3">A quick pitch about who you are and what you're looking for.</p>
                    <textarea 
                      className="w-full border border-gray-300 rounded-lg p-4 text-[14px] text-gray-700 focus:outline-none focus:border-[#1C6AC3] focus:ring-1 focus:ring-[#1C6AC3] shadow-sm min-h-[140px]"
                      placeholder="I am a recent computer science graduate passionate about building scalable backends and learning new technologies..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100">
                    <button className="bg-[#1C6AC3] text-white font-bold text-[14px] px-8 py-3 rounded-md hover:bg-[#144C8B] shadow-sm transition-all focus:ring-4 focus:ring-blue-100">
                      Save Background Info
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Education Tab */}
            {activeTab === "Education" && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-700 bg-[#0d172e]/50">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 border-b-2 inline-block border-[#1C6AC3] pb-1">Academic Background</h2>
                  <p className="text-gray-500 text-sm mt-3">Detail your academic history so HR can match you with targeted university recruiting programs.</p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">University / Institution <span className="text-red-500">*</span></label>
                      <Input placeholder="Enter your university name..." className="h-11 shadow-sm border-gray-300" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Degree Level <span className="text-red-500">*</span></label>
                        <select className="w-full h-11 border border-gray-300 rounded-md px-3 bg-white text-[14px] focus:outline-none focus:border-[#1C6AC3] shadow-sm">
                          <option>Select level...</option>
                          <option>Bachelor's Degree</option>
                          <option>Master's Degree</option>
                          <option>PhD</option>
                          <option>Bootcamp/Certificate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Major / Field of Study <span className="text-red-500">*</span></label>
                        <Input placeholder="e.g. Finance, Biology, Computer Science" className="h-11 shadow-sm border-gray-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Expected Graduation Date <span className="text-red-500">*</span></label>
                        <Input type="month" className="h-11 shadow-sm border-gray-300 text-gray-600" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Cumulative GPA (Optional)</label>
                        <Input placeholder="e.g. 3.8 / 4.0" className="h-11 shadow-sm border-gray-300" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-bold text-gray-700 mb-2">Relevant Coursework or Honors</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded-lg p-4 text-[14px] text-gray-700 focus:outline-none focus:border-[#1C6AC3] shadow-sm min-h-[100px]"
                        placeholder="Dean's List 2024, Intro to Algorithms, Corporate Finance..."
                      ></textarea>
                    </div>

                    <div className="flex justify-end pt-6 border-t border-gray-100">
                      <button className="bg-[#1C6AC3] text-white font-bold text-[14px] px-8 py-3 rounded-md hover:bg-[#144C8B] shadow-sm transition-all focus:ring-4 focus:ring-blue-100">
                        Save Education Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Career Preferences Tab */}
            {activeTab === "Career Requirements" && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-700 bg-[#0d172e]/50">
                  <h2 className="text-2xl font-bold text-white mb-2">Career Preferences</h2>
                  <p className="text-gray-400 text-sm">Fine-tune exactly what type of role, industry, and location you are looking for.</p>
                </div>
                
                <div className="p-8 space-y-8">
                  
                  <div>
                    <h3 className="font-bold text-gray-800 text-[15px] border-b border-gray-100 pb-2 mb-4">Location & Logistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Target Work Locations</label>
                        <Input placeholder="e.g. New York, Remote, London" className="h-11 shadow-sm border-gray-300 mb-2" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Work Authorization</label>
                        <select className="w-full h-11 border border-gray-300 rounded-md px-3 bg-white text-[14px] focus:outline-none focus:border-[#1C6AC3] shadow-sm">
                          <option>US Citizen / Permanent Resident</option>
                          <option>Require Visa Sponsorship</option>
                          <option>Authorized in EU</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 text-[15px] border-b border-gray-100 pb-2 mb-4">Job Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Preferred Roles</label>
                        <Input placeholder="e.g. Software Engineer, Analyst" className="h-11 shadow-sm border-gray-300 mb-2" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Preferred Industries</label>
                        <Input placeholder="e.g. FinTech, Healthcare, Consulting" className="h-11 shadow-sm border-gray-300 mb-2" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Job Type</label>
                        <select className="w-full h-11 border border-gray-300 rounded-md px-3 bg-white text-[14px] focus:outline-none focus:border-[#1C6AC3] shadow-sm">
                          <option>Full-Time Entry Level</option>
                          <option>Internship</option>
                          <option>Part-Time</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-gray-700 mb-2">Available Start Date</label>
                        <Input type="date" className="h-11 shadow-sm border-gray-300 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100">
                    <button className="bg-[#1C6AC3] text-white font-bold text-[14px] px-8 py-3 rounded-md hover:bg-[#144C8B] shadow-sm transition-all focus:ring-4 focus:ring-blue-100">
                      Save Career Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 5. HISTORY TAB (Brand new feature asked by user) */}
            {activeTab === "History" && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full min-h-[600px]">
                <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Virtual Job Simulations History</h2>
                    <p className="text-gray-500 text-sm">View completed tasks, download your certificates, and track your acquired skills.</p>
                  </div>
                  <div className="bg-[#e0f2fe] text-[#0369a1] px-4 py-2 rounded-md font-bold text-sm">
                    3 Completed
                  </div>
                </div>

                <div className="p-8 bg-white flex-1">
                   {/* History Item 1 */}
                   <div className="border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
                     <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center font-bold text-lg text-[#22c55e]">
                           PwC
                         </div>
                         <div>
                            <h3 className="font-bold text-[16px] text-gray-900">Corporate Tax - International Tax Trading</h3>
                            <p className="text-[13px] text-gray-500">Completed June 12, 2025 • Approx. 6 Hours</p>
                         </div>
                       </div>
                       <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          VERIFIED
                       </div>
                     </div>
                     <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between">
                       <div className="text-[13px] text-gray-600 font-medium">
                         <span className="text-gray-400 font-normal">Skills Learned:</span> Excel Macros, Tax Legislation, Auditing.
                       </div>
                       <button className="text-[#1C6AC3] font-bold text-[13px] hover:underline flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Download Certificate
                       </button>
                     </div>
                   </div>

                   {/* History Item 2 */}
                   <div className="border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
                     <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-black rounded flex items-center justify-center font-bold text-xs text-white">
                           Discover
                         </div>
                         <div>
                            <h3 className="font-bold text-[16px] text-gray-900">Discover Summer Internship Prep</h3>
                            <p className="text-[13px] text-gray-500">Completed March 01, 2025 • Approx. 4 Hours</p>
                         </div>
                       </div>
                       <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          VERIFIED
                       </div>
                     </div>
                     <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between">
                       <div className="text-[13px] text-gray-600 font-medium">
                         <span className="text-gray-400 font-normal">Skills Learned:</span> Customer Success, Data Privacy, Communication.
                       </div>
                       <button className="text-[#1C6AC3] font-bold text-[13px] hover:underline flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Download Certificate
                       </button>
                     </div>
                   </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar - Status Information */}
          <div className="w-full lg:w-[320px] flex flex-col gap-6">
            
            {/* Completion Card */}
            <div className="bg-[#081121] p-6 rounded-xl border border-[#1e293b] shadow-sm">
              <h3 className="font-bold text-[16px] text-white mb-4">Profile Strength</h3>
              <div className="flex gap-1 mb-4 h-2">
                <div className="flex-1 bg-green-500 rounded-l-full"></div>
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-[#1e293b] opacity-30"></div>
                <div className="flex-1 bg-[#1e293b] rounded-r-full"></div>
              </div>
              <p className="font-bold text-[14px] text-white mb-2">Good (60%)</p>
              <p className="text-[13px] text-gray-400 leading-relaxed mb-4">
                Adding your resume and completing a job simulation will drastically improve your discovery rate by recruiters.
              </p>
              <ul className="text-[12px] space-y-2 mb-4">
                <li className="flex items-center gap-2 text-green-500"><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Basic Info Complete</li>
                <li className="flex items-center gap-2 text-green-500"><svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> Education Added</li>
                <li className="flex items-center gap-2 text-gray-400"><div className="w-4 h-4 rounded-full border-2 border-gray-600"></div> Resume/CV Upload</li>
                <li className="flex items-center gap-2 text-gray-400"><div className="w-4 h-4 rounded-full border-2 border-gray-600"></div> Set Target Locations</li>
              </ul>
            </div>

            {/* Visibility Card */}
            <div className="bg-gradient-to-br from-[#1C6AC3] to-[#144C8B] text-white p-6 rounded-xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                 <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
              </div>
              <h3 className="font-bold text-[16px] mb-2 relative z-10">Recruiter Visibility</h3>
              <p className="text-[13px] text-blue-100 mb-4 relative z-10 leading-relaxed">
                Allow employer partners to view your profile and contact you directly about upcoming roles.
              </p>
              
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg relative z-10 backdrop-blur-sm">
                 <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#144C8B] appearance-none cursor-pointer transform translate-x-5 transition-transform" />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-[#3AA8B0] cursor-pointer"></label>
                 </div>
                 <span className="text-sm font-bold">Currently Visible</span>
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </div>
  );
}
