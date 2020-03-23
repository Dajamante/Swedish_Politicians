from parser import Parser


def main():
    path_text_to_classify = "/Users/aissata/mySkolfiler2/mvk/MVK-influencers/dataprocessing/negative.txt"
    file = open(path_text_to_classify, 'rt')
    text = file.read()
    file.close()
    # split into words by white space
    words_array = text.split()
    # print(words[:100])
    classified_words = Parser().parse()
    print(compare(classified_words, words_array))


def compare(classified_words, words_array):
    total_score = 0
    for w in words_array:
        # print(w)
        for key, value in classified_words:
            if w == key:
                total_score += int(value)
    return total_score


if __name__ == '__main__':
    main()
