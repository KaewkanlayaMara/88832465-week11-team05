const members = [
  ['นาย ธีรภัทร งามสุข', 'เติ้ล', 'Team leader (BA)'],
  ['นางสาวแก้วกัลญา มารศรี', 'พอมมี่', 'Support Manager (Front-end)'],
  ['นางสาวศวิตา กิ่งพุทธพงษ์', 'โอปอล', 'Plan Manager (Front-end)'],
  ['นาย ธัชณัฏฐ์กร วงศ์เดขสกุล', 'ปัณณ์', 'Plan Engineer (UX/UI)'],
  ['นายญาณากร นิดร', 'เปา (ใหญ่)', 'Development Manager (Backend)'],
  ['นายปุณณพัฒน์ มาตย์สาลี', 'เปา (เล็ก)', 'Development Engineer (Backend)'],
  ['นาย กฤษติกร รอดโสภา', 'บุ๊ค', 'Development Engineer (Full Stack)'],
  ['นางสาวณัฐรฎา ปะสิ่งชอบ', 'ณัฐ', 'Quality Engineer (backend)'],
  ['นายพัสกร ไกรพงษ์', 'โมเดล', 'Quality Manager (UX/UI)'],
  ['นางสาวฐิตาภา พูนสง่า', 'การ์ตูน', 'Support Engineer (UX/UI)'],
  ['นาย วรากร รุ่งสีทอง', 'บอส', 'Support Engineer (Front-end)'],
  ['นายพีรวิชญ์ ชูเเสง', 'ซัน', 'Plan Engineer (Back-end)']
];

const grid = document.querySelector('#memberGrid');
const searchInput = document.querySelector('#searchInput');
const emptyState = document.querySelector('#emptyState');

function renderMembers() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleMembers = members.filter((member) => member.join(' ').toLowerCase().includes(query));
  grid.innerHTML = visibleMembers.map((member) => {
    const index = members.indexOf(member) + 1;
    return `<article class="member-card"><span class="member-number">${String(index).padStart(2, '0')}</span><div><h3>${member[0]}</h3><p class="member-nickname">${member[1]}</p><p class="member-role">${member[2]}</p></div><span class="member-arrow">↗</span></article>`;
  }).join('');
  emptyState.classList.toggle('visible', visibleMembers.length === 0);
}

searchInput.addEventListener('input', renderMembers);
renderMembers();
