class Parser:

    def __init__(self):
        self.path_text = "/Users/aissata/mySkolfiler2/mvk/MVK-influencers/dataprocessing/classifierad_ord.txt"

    def parse(self):
        result = []
        # read binary mode: https://stackoverflow.com/questions/22216076/unicodedecodeerror-utf8-codec-cant-decode-byte-0xa5-in-position-0-invalid-s
        with open(self.path_text, "r") as pt:
            for i in pt.readlines():
                if len(i.strip()) == 0:
                    continue
                tmp = i.rstrip().split(" ")
                tmp_tuple = (tmp[0], tmp[1])
                # print(tmp_tuple)
                result.append(tmp_tuple)
        return result
