from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
import pymupdf as fitz
for name,file in [('Arial','Arial.ttf'),('ArialBold','Arial Bold.ttf')]:
 pdfmetrics.registerFont(TTFont(name,'/System/Library/Fonts/Supplemental/'+file))
pdfmetrics.registerFontFamily('Arial',normal='Arial',bold='ArialBold',italic='Arial',boldItalic='ArialBold')
root=Path('output/pdf'); output=root/'hritvik-dinkar-resume-focused.pdf'
styles={
 'name':ParagraphStyle('name',fontName='ArialBold',fontSize=21,leading=25,spaceAfter=3),
 'contact':ParagraphStyle('contact',fontName='Arial',fontSize=8.8,leading=12),
 'body':ParagraphStyle('body',fontName='Arial',fontSize=9.4,leading=11.5),
 'skill':ParagraphStyle('skill',fontName='Arial',fontSize=9.2,leading=12),
 'section':ParagraphStyle('section',fontName='ArialBold',fontSize=9,leading=12,spaceBefore=7,spaceAfter=3),
 'role':ParagraphStyle('role',fontName='ArialBold',fontSize=10,leading=13),
 'meta':ParagraphStyle('meta',fontName='Arial',fontSize=9.1,leading=12),
 'bullet':ParagraphStyle('bullet',fontName='Arial',fontSize=9.4,leading=11.5,leftIndent=8,firstLineIndent=-8,spaceAfter=4),
}
def p(t,style='body'):return Paragraph(t,styles[style])
def bullet(t):return p('&#8226; '+escape(t),'bullet')
def section(title):return [p(title,'section'),HRFlowable(width='100%',thickness=.4,color='#bbbbbb',spaceAfter=4)]
summary='<b>Senior Backend / Platform Engineer.</b> SDE III at Meesho with 8+ years building production Generative AI platforms and distributed systems. Owns supplier-support automation and shared LLM services from system design and implementation through rollout and production operations.'
skills=[('Generative AI','Azure OpenAI, LLM routing, agent loops, prompt/model/deployment registries, LLM evaluation, intent classification, response generation'),('System Design','Event-driven architecture, API composition, fan-out/fan-in, idempotency, retries, DLQs, replay, circuit breakers, caching, high availability'),('Stack & Tools','Java, Python, Spring Boot, FastAPI, REST APIs, Kafka, MongoDB, Redis, Elasticsearch, Apache Spark, Prometheus, Grafana, Metabase, Terraform, Jenkins')]
impact=[
'Expanded automated supplier-support coverage to 60% of ticket categories through configurable SOP-driven workflows and GenAI-assisted resolution.',
'Reduced Support Chatbot human escalation from 25% to about 10% through retrieval, LLM routing, prompts, evaluation, and agent-loop improvements.',
'Cut contact-center ingestion runtime from 2 hours to 2 minutes by replacing an overbuilt batch flow with a lean, reusable pipeline.'
]
left=[
'Lead end-to-end design, implementation, and maintenance of Agentless, an automated supplier-support resolution platform, combining Java/Spring orchestration with Python/FastAPI GenAI services.',
'Translated business-owned SOPs into configurable workflow steps, MVEL rules, and GenAI-backed intent classification / response generation, expanding automation coverage to 60% of supplier ticket categories.',
'Built shared GenAI platform services for LLM routing, prompt/model/deployment registries, deterministic traffic splits, evaluation flows, Prometheus/Grafana observability, and Terraform-backed Azure OpenAI operations.',
'Reduced Support Chatbot escalation to human agents from 25% to about 10%, with lows around 8%, by improving FAQ retrieval, model routing, prompt behavior, evaluation loops, fallback policy, UI flows, and order/API context.',
'Delivered high-availability customer/supplier support systems with Java, Spring Boot, Kafka, MongoDB, replay-safe orchestration, external ticketing-platform sync, reconciliation dashboards, and zero-downtime migration patterns.',
'Built data and analytics pipelines for contact-center call metadata and survey responses, replacing manual reporting workflows and reducing one ingestion runtime from 2 hours to 2 minutes.'
]
right=[
'Designed fault-tolerant, event-driven support orchestration using Kafka fan-out/fan-in, MongoDB ticket/entity processing contexts, multi-phase workflows, step-level idempotency, retries, DLQs, replay, stalled-ticket recovery, and human escalation paths.',
'Designed a config-driven data orchestrator to model internal APIs through field/API dependencies; led execution-layer delivery for API composition, concurrency, and fan-out to make new support-flow onboarding configuration-driven.',
'Mentored junior engineers through implementation of the data-orchestrator execution layer and onboarding automation; owned task decomposition, design reviews, code reviews, stakeholder demos, and cross-functional delivery.',
'Evolved chatbot answer generation from one-step LLM responses to an agent loop that could gather ticket/order context and produce more reliable supplier/customer responses.',
'Improved production readiness by load testing 5x projected sale traffic and helping resolve a thread-pool memory leak that reduced pod requirements from 35 cores / 70 GB to 21 cores / 40 GB.'
]
oracle='Built an embeddable Oracle Commerce integration plugin for credential collection, field mapping, sync initiation, and sync monitoring using Oracle Visual Builder, JavaScript, and Knockout.'
jio='Built Java/Python services over Elasticsearch, Kafka, and Spark for computation, forecasting, monitoring, cluster operations, and BI pipelines; developed HA deployment and monitoring services.'
story=[p('Hritvik Dinkar','name'),p('Bengaluru, India | +91 9876842631 | hritvik.works@gmail.com | <link href="https://linkedin.com/in/hritvik">linkedin.com/in/hritvik</link> | <link href="https://hritvik-dinkar.pages.dev">hritvik-dinkar.pages.dev</link>','contact'),HRFlowable(width='100%',thickness=.7,spaceBefore=4,spaceAfter=6),p(summary)]
story+=section('TECHNICAL SKILLS')
for label,text in skills:
 story+=[p('<b>'+escape(label)+':</b> '+escape(text),'skill'),Spacer(1,3)]
story+=section('SELECTED IMPACT')
story += [bullet(t) for t in impact]
story+=section('EXPERIENCE')
story += [p('Meesho | Software Development Engineer III, promoted from SDE II','role'),p('May 2022 - Present | Bengaluru, India','meta'),Spacer(1,5)]
def columns(a,b):
 table=Table([[a,b]],colWidths=[262,262],hAlign='LEFT')
 table.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(0,0),0),('RIGHTPADDING',(0,0),(0,0),9),('LEFTPADDING',(1,0),(1,0),9),('RIGHTPADDING',(1,0),(1,0),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
 return table
story += [columns([bullet(t) for t in left],[bullet(t) for t in right]),Spacer(1,4)]
story += [columns([p('Oracle | Software Developer','role'),p('Jun 2021 - May 2022 | Hyderabad, India','meta'),Spacer(1,4),bullet(oracle)],[p('Jio | Software Developer','role'),p('Jul 2018 - May 2021 | Navi Mumbai, India','meta'),Spacer(1,4),bullet(jio)])]
story+=section('EDUCATION')
story += [p('<b>Indian Institute of Technology, Ropar</b> | B.Tech., Electrical and Electronics Engineering | 2014 - 2018','meta')]
SimpleDocTemplate(str(output),pagesize=(594.96,841.92),leftMargin=35.48,rightMargin=35.48,topMargin=22,bottomMargin=24).build(story)
d=fitz.open(output)
print('Pages:',len(d))
assert len(d)==1,'Must remain one page'
text=d[0].get_text()
assert 'CORE SYSTEMS' not in text
for token in ['Generative AI','System Design','60%','25%','2 hours to 2 minutes','EDUCATION']:assert token in text,token
d[0].get_pixmap(matrix=fitz.Matrix(1.7,1.7)).save('tmp/pdfs/focused-preview.png')
md=['# Hritvik Dinkar','Bengaluru, India | +91 9876842631 | hritvik.works@gmail.com | linkedin.com/in/hritvik | hritvik-dinkar.pages.dev',summary.replace('<b>','').replace('</b>',''),'## Technical Skills']
md += ['**'+label+':** '+text for label,text in skills]
md += ['## Selected Impact']+['- '+t for t in impact]
md += ['## Experience','### Meesho | Software Development Engineer III, promoted from SDE II','May 2022 - Present | Bengaluru, India']+['- '+t for t in left+right]
md += ['### Oracle | Software Developer','Jun 2021 - May 2022 | Hyderabad, India','- '+oracle,'### Jio | Software Developer','Jul 2018 - May 2021 | Navi Mumbai, India','- '+jio,'## Education','Indian Institute of Technology, Ropar | B.Tech., Electrical and Electronics Engineering | 2014 - 2018']
(root/'hritvik-dinkar-resume-focused.md').write_text('\n\n'.join(md)+'\n')
print('Verified content and rendered preview.')
