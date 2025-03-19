import React from 'react';

import './style/study.css';
import Header from "../../component/Header";

function ServerCreate() {
  return (
    <div id="wrap">
      <Header/>
      
      <div className="guide-container">
        <h1 className="guide-title">리눅스 서버 구축 및 오라클 DB 설정 가이드</h1>
        
        <section className="guide-section">
          <h2>1. 리눅스 서버 설치</h2>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>1.1 Ubuntu Server 설치하기</h3>
              <p>Ubuntu Server 20.04 LTS는 안정성과 장기 지원으로 서버 환경에 적합합니다.</p>
              <ol>
                <li>Ubuntu 웹사이트에서 <a href="https://ubuntu.com/download/server" target="_blank">Ubuntu Server 20.04 LTS</a> ISO 이미지를 다운로드합니다.</li>
                <li>USB 부팅 디스크를 만들거나 가상 머신에 ISO를 마운트합니다.</li>
                <li>서버를 부팅하고 화면의 지시를 따라 설치를 완료합니다.</li>
                <li>설치 과정에서 SSH 서버 옵션을 선택하여 원격 접속이 가능하도록 합니다.</li>
              </ol>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>1.2 기본 보안 설정</h3>
              <p>서버 보안을 위한 기본 설정을 진행합니다:</p>
              <pre className="code-block">
                <code>
                  # SSH 포트 변경 (선택사항)
                  sudo nano /etc/ssh/sshd_config
                  # Port 22 행을 찾아 Port 2222(원하는 포트)로 변경

                  # 방화벽 설정
                  sudo apt update
                  sudo apt install ufw
                  sudo ufw allow 2222/tcp  # 변경한 SSH 포트
                  sudo ufw allow 1521/tcp  # 오라클 DB 포트
                  sudo ufw enable

                  # SSH 서비스 재시작
                  sudo systemctl restart sshd
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section className="guide-section">
          <h2>2. 오라클 데이터베이스 설치</h2>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>2.1 사전 요구사항 설치</h3>
              <p>오라클 데이터베이스 설치를 위한 필수 패키지를 설치합니다:</p>
              <pre className="code-block">
                <code>
                  # 필수 패키지 설치
                  sudo apt update
                  sudo apt install -y build-essential libaio1 libaio-dev unzip zip

                  # 스왑 공간 확인 및 설정 (최소 2GB 권장)
                  free -h
                  sudo fallocate -l 2G /swapfile
                  sudo chmod 600 /swapfile
                  sudo mkswap /swapfile
                  sudo swapon /swapfile
                  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
                </code>
              </pre>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>2.2 오라클 XE 설치</h3>
              <p>Oracle Database Express Edition(XE)은 무료로 사용할 수 있는 DB 버전입니다:</p>
              <ol>
                <li><a href="https://www.oracle.com/database/technologies/xe-downloads.html" target="_blank">오라클 공식 사이트</a>에서 Oracle Database 21c XE를 다운로드합니다.</li>
                <li>다운로드한 파일을 서버에 업로드합니다:</li>
              </ol>
              <pre className="code-block">
                <code>
                  # 다운로드한 RPM 파일 업로드 후
                  sudo alien -d oracle-database-xe-21c*.rpm  # Debian 패키지로 변환
                  sudo dpkg -i oracle-database-xe-21c*.deb   # 패키지 설치

                  # 오라클 XE 설정
                  sudo /etc/init.d/oracle-xe-21c configure
                </code>
              </pre>
              <p>설치 중 패스워드 설정 및 기타 옵션을 선택합니다.</p>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>2.3 환경 변수 설정</h3>
              <p>오라클 DB 사용을 위한 환경 변수를 설정합니다:</p>
              <pre className="code-block">
                <code>
                  # .bashrc 파일에 환경 변수 추가
                  sudo nano ~/.bashrc

                  # 파일 끝에 다음 내용 추가
                  export ORACLE_HOME=/opt/oracle/product/21c/dbhomeXE
                  export ORACLE_SID=XE
                  export PATH=$PATH:$ORACLE_HOME/bin

                  # 변경사항 적용
                  source ~/.bashrc
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section className="guide-section">
          <h2>3. DBeaver로 오라클 DB 관리</h2>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>3.1 DBeaver 설치</h3>
              <p>DBeaver는 다양한 데이터베이스를 지원하는 무료 관리 도구입니다:</p>
              <ol>
                <li><a href="https://dbeaver.io/download/" target="_blank">DBeaver 공식 사이트</a>에서 운영체제에 맞는 버전을 다운로드합니다.</li>
                <li>다운로드한 설치 파일을 실행하여 설치를 완료합니다.</li>
              </ol>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>3.2 오라클 DB 연결 설정</h3>
              <p>DBeaver를 사용하여 오라클 DB에 연결합니다:</p>
              <ol>
                <li>DBeaver를 실행하고 <strong>새 데이터베이스 연결</strong> 버튼을 클릭합니다.</li>
                <li>연결 유형에서 <strong>Oracle</strong>을 선택합니다.</li>
                <li>다음 연결 정보를 입력합니다:
                  <ul>
                    <li>호스트: 리눅스 서버 IP 주소</li>
                    <li>포트: 1521 (기본값)</li>
                    <li>데이터베이스: XE</li>
                    <li>사용자 이름: system (기본 관리자 계정)</li>
                    <li>비밀번호: 설치 시 설정한 비밀번호</li>
                  </ul>
                </li>
                <li>연결 테스트 버튼을 클릭하여 연결을 확인합니다.</li>
                <li>연결이 성공하면 완료 버튼을 클릭합니다.</li>
              </ol>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>3.3 새 사용자 및 테이블스페이스 생성</h3>
              <p>DBeaver를 통해 새 사용자와 테이블스페이스를 생성합니다:</p>
              <pre className="code-block">
                <code>
                  -- 새 테이블스페이스 생성
                  CREATE TABLESPACE my_tablespace
                  DATAFILE '/opt/oracle/oradata/XE/my_tablespace.dbf'
                  SIZE 100M AUTOEXTEND ON NEXT 50M MAXSIZE 500M;

                  -- 새 사용자 생성
                  CREATE USER my_user IDENTIFIED BY my_password
                  DEFAULT TABLESPACE my_tablespace
                  QUOTA UNLIMITED ON my_tablespace;

                  -- 사용자에게 권한 부여
                  GRANT CONNECT, RESOURCE TO my_user;
                  GRANT CREATE SESSION TO my_user;
                  GRANT CREATE TABLE TO my_user;
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section className="guide-section">
          <h2>4. 샘플 테이블 생성 및 데이터 관리</h2>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>4.1 샘플 테이블 생성</h3>
              <p>새로 생성한 사용자로 로그인한 후, 샘플 테이블을 생성합니다:</p>
              <pre className="code-block">
                <code>
                  -- 게시판 테이블 생성
                  CREATE TABLE posts (
                    post_id NUMBER PRIMARY KEY,
                    title VARCHAR2(200) NOT NULL,
                    content CLOB,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    view_count NUMBER DEFAULT 0
                  );

                  -- 시퀀스 생성
                  CREATE SEQUENCE posts_seq
                  START WITH 1
                  INCREMENT BY 1
                  NOCACHE
                  NOCYCLE;

                  -- 트리거 생성 (자동 ID 부여)
                  CREATE OR REPLACE TRIGGER posts_bi_trg
                  BEFORE INSERT ON posts
                  FOR EACH ROW
                  BEGIN
                    SELECT posts_seq.NEXTVAL INTO :NEW.post_id FROM DUAL;
                  END;
                  /
                </code>
              </pre>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>4.2 샘플 데이터 추가</h3>
              <p>생성한 테이블에 샘플 데이터를 추가합니다:</p>
              <pre className="code-block">
                <code>
                  -- 샘플 데이터 삽입
                  INSERT INTO posts (title, content) VALUES ('리눅스 서버 구축 가이드', '리눅스 서버를 구축하는 방법에 대한 상세 가이드입니다.');
                  INSERT INTO posts (title, content) VALUES ('오라클 DB 설치 방법', '리눅스 환경에서 오라클 데이터베이스를 설치하는 방법입니다.');
                  INSERT INTO posts (title, content) VALUES ('DBeaver 사용법', 'DBeaver를 사용하여 데이터베이스를 효율적으로 관리하는 방법에 대한 팁과 트릭');

                  -- 변경사항 저장
                  COMMIT;
                </code>
              </pre>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>4.3 데이터 조회 및 관리</h3>
              <p>DBeaver에서 데이터를 조회하고 관리하는 방법:</p>
              <ol>
                <li>데이터베이스 탐색기에서 테이블을 선택합니다.</li>
                <li>마우스 오른쪽 버튼을 클릭하고 <strong>데이터 보기</strong>를 선택합니다.</li>
                <li>데이터를 직접 편집하거나 SQL 쿼리를 실행할 수 있습니다.</li>
              </ol>
              <pre className="code-block">
                <code>
                  -- 모든 게시물 조회
                  SELECT * FROM posts ORDER BY created_at DESC;

                  -- 특정 게시물 조회
                  SELECT * FROM posts WHERE post_id = 1;

                  -- 게시물 수정
                  UPDATE posts SET title = '리눅스 서버 구축 종합 가이드', view_count = view_count + 1 WHERE post_id = 1;

                  -- 게시물 삭제
                  DELETE FROM posts WHERE post_id = 3;

                  -- 변경사항 저장
                  COMMIT;
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section className="guide-section">
          <h2>5. 백업 및 복구</h2>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>5.1 데이터베이스 백업</h3>
              <p>오라클 데이터베이스 백업 방법:</p>
              <pre className="code-block">
                <code>
                  # EXPDP를 사용한 백업 (CLI)
                  expdp system/패스워드 schemas=my_user directory=DATA_PUMP_DIR dumpfile=backup.dmp logfile=backup.log

                  # DBeaver에서 백업
                  # 데이터베이스를 선택하고 도구 - 데이터베이스 내보내기를 선택
                </code>
              </pre>
            </div>
          </div>
          
          <div className="guide-content">
            <div className="guide-text">
              <h3>5.2 데이터베이스 복구</h3>
              <p>오라클 데이터베이스 복구 방법:</p>
              <pre className="code-block">
                <code>
                  # IMPDP를 사용한 복구 (CLI)
                  impdp system/패스워드 schemas=my_user directory=DATA_PUMP_DIR dumpfile=backup.dmp logfile=restore.log

                  # DBeaver에서 복구
                  # 도구 - 데이터베이스 가져오기를 선택하고 백업 파일을 지정
                </code>
              </pre>
            </div>
          </div>
        </section>
        
        <section className="guide-section conclusion">
          <h2>결론</h2>
          <p>이 가이드를 통해 리눅스 서버를 구축하고, 오라클 데이터베이스를 설치하며, DBeaver를 사용하여 데이터베이스를 관리하는 방법에 대해 알아보았습니다. 이 지식을 바탕으로 안정적인 데이터베이스 서버를 운영하고 효율적으로 데이터를 관리할 수 있습니다.</p>
          <p>더 자세한 내용은 <a href="https://docs.oracle.com/en/database/" target="_blank">오라클 공식 문서</a>나 <a href="https://dbeaver.com/docs/wiki/" target="_blank">DBeaver 위키</a>를 참조하십시오.</p>
        </section>
      </div>
    </div>
  );
}

export default ServerCreate;