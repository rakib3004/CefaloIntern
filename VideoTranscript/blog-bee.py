from youtube_transcript_api import YouTubeTranscriptApi as yta
from translate import Translator
translator= Translator(to_lang="Bangla") 

import re

my_file = open("Data/BlogScript.txt", "r")

data = my_file.read()

video_group = data.split("\n")
print(video_group)
my_file.close()

lanID = 1
for video_id in video_group:

    data = yta.get_transcript(video_id)

    transcript = ''
    for value in data:
        for key, val in value.items():
            if key == 'text':
                transcript += val+" "

    transcript=transcript.strip()

    language = "BlogText/Document"+str(lanID)+".txt"
    lanID = lanID+1
    file = open(language, "w")
    print(dir(yta))
    file.write(transcript)

    file.close()
